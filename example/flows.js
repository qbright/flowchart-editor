(function(System, SystemJS) {
    System.register("flows/FlowsIndexCtrl.js", [], function(a, b) {
      "use strict";
      function c(a, b, c, d, e, f, g) {
        function h(a) {
          var b = {};
          return angular.forEach(a, function(a, c) {
            b[c] = j[c] === a ? null : a
          }),
            b
        }
        function i(c) {
          var d, e = a.filters.page, f = a.itemsPerPage, g = (a.filters.q || "").toLowerCase();
          d = g ? _.filter(l, function(a) {
            return a.lowerCaseName.indexOf(g) !== -1
          }) : l,
            a.flowList = d.slice((e - 1) * f, e * f),
            a.totalItems = d.length,
            a.searched = !!g,
          c || b.go(b.current.name, h(a.filters), {
            location: "replace"
          })
        }
        a.permissionOfCreate = e("flows.create");
        var j = {
          page: 1
        }
          , k = _.defaults({}, c, j);
        a.filters = k;
        var l = f
          , m = new d("flows","flowId")
          , n = m.all()
          , o = {};
        _.forEach(n, function(a) {
          o[a.flowId] = +moment(a.visitedAt)
        }),
          _.forEach(l, function(a) {
            a.lowerCaseName = a && a.name && a.name.toLowerCase() || "",
              a.visitedAt = o[a.flowId] || 0,
              a.isRelated = a.creator === g
          }),
          l = _.orderBy(l, ["visitedAt", "isRelated", "ctime"], ["desc", "desc", "desc"]),
          a.itemsPerPage = 15,
          a.search = function() {
            a.filters.page = 1,
              i()
          }
          ,
          a.pageChange = i,
          i(!0)
      }
      return a("default", c),
        {
          setters: [],
          execute: function() {
            c.$inject = ["$scope", "$state", "$stateParams", "VisitHistory", "checkPermission", "flowListData", "USERNAME"]
          }
        }
    }),
      System.register("flows/FlowAbstractCtrl.js", [], function(a, b) {
        "use strict";
        function c(a, b, c, d) {
          function e(a) {
            return d.creator === a
          }
          a.flowData = d,
            d.inputList = angular.copy(d.flowInputs),
            a.permissionOfEdit = c("flows.flow.edit", e),
            a.permissionOfRemove = c("flows.flow.remove", e),
            a.permissionOfExecute = c("flows.flow.execute");
          var f = new b("flows","flowId");
          f.push(_.pick(d, "flowId"))
        }
        return a("default", c),
          {
            setters: [],
            execute: function() {
              c.$inject = ["$scope", "VisitHistory", "checkPermission", "flowData"]
            }
          }
      }),
      System.register("flows/FlowDetailCtrl.js", [], function(a, b) {
        "use strict";
        function c(a, b, c, d, e, f, g, h, i, j, k, l) {
          function m() {
            s.setSize([q.width(), q.height()])
          }
          function n() {
            a.removing = !0,
              k.removeFlow(l.flowId).then(function() {
                g.success("流程已删除"),
                  b.go("flows.index")
              }).catch(function(a) {
                j(a, "删除流程")
              }).finally(function() {
                a.removing = !1
              })
          }
          var o = angular.copy(l.stepList);
          a.exportUrl = "/api/flows/flow/" + l.flowId + "/export",
            _.some(o, "root") ? _.forEach(o, function(a) {
              a.root && delete a.parents
            }) : _.forEach(o, function(a, b) {
              0 === b ? a.root = !0 : a.parents = [{
                stepId: b
              }],
                a.uid = _.uniqueId("step"),
                a.stepId = b + 1,
                a.type = "task",
                a._x = 200 + 150 * b,
                a._y = 100
            }),
            _.forEach(o, function(a, b) {
              "plugin" === a.type && (a.type = "task",
                a.plugin = !0),
              a.parents && _.forEach(a.parents, function(c) {
                var d = _.find(o, function(a) {
                  return a.stepId === c.stepId
                });
                if (d) {
                  d.children || (d.children = []);
                  var e = {
                    index: b,
                    stepId: a.stepId,
                    detail: a,
                    sourcePoint: c.sourcePoint,
                    targetPoint: c.targetPoint
                  };
                  0 === c.if ? e.branch = "yes" : 1 === c.if && (e.branch = "no"),
                    d.children.push(e)
                }
              }),
                delete a.parents
            });
          var p = ".flow-viewport-detail"
            , q = $(p)
            , r = {
            keyId: "uid",
            appendTo: p,
            baseHref: e.url(),
            size: [q.width(), q.height()],
            zoomEnabled: !0,
            crispEdges: !1,
            classed: "readonly",
            interactEnabled: !1
          }
            , s = new Flowchart({
            nodes: o
          },r);
          $(f).on("resize", m),
            a.removeFlow = function() {
              h.confirm({
                isDelete: !0,
                message: "确认要删除流程 <code>" + i.escapeHtml(l.name) + "</code> 吗？",
                html: !0,
                resolved: function() {
                  n()
                }
              })
            }
            ,
            a.$on("$destroy", function() {
              $(f).off("resize", m)
            })
        }
        return a("default", c),
          {
            setters: [],
            execute: function() {
              c.$inject = ["$scope", "$state", "$stateParams", "$timeout", "$location", "$window", "toastr", "Dialog", "Utils", "handleAjaxError", "Flows", "flowData"]
            }
          }
      }),
      System.register("flows/FlowExecuteCtrl.js", [], function(a, b) {
        "use strict";
        function c(a, b, c, d, e, f, g) {
          var h = a.executeForm = {
            inputList: angular.copy(g.inputList)
          }
            , i = c.flowRetryData;
          if (i) {
            if (delete c.flowRetryData,
              i.flowId === g.flowId) {
              h.agents = i.flowAgents.join(", ");
              var j = i.flowInputs;
              j && angular.forEach(h.inputList, function(a) {
                j.hasOwnProperty(a.name) && ("int" === a.type ? a.value = +j[a.name] : a.value = j[a.name])
              })
            }
          } else
            _.forEach(h.inputList, function(a) {
              "int" === a.type ? a.value = +a.default : a.value = a.default
            });
          a.selectDevices = function(a) {
            h.agents = _.map(a, "ip").join(", ")
          }
            ,
            a.$watch("executeForm.agents", function() {
              var b = d.matchIps(h.agents);
              h.selectedIps = b,
                a.agentsCount = b ? b.length : 0
            }),
            a.selectDevicesForInput = function(a, b) {
              b.selectedIps = _.uniq(_.map(a, "ip")),
                b.value = b.selectedIps.join(", ")
            }
            ,
            a.inputItemChange = function(a) {
              "ips" === a.type && (a.selectedIps = d.matchIps(a.value))
            }
            ,
            a.execute = function() {
              if (!a.formExecuteFlow.$invalid) {
                var c = d.matchIps(h.agents);
                if (c) {
                  var i = {};
                  angular.forEach(h.inputList, function(a) {
                    "ips" === a.type ? i[a.name] = a.value.split(/,\s?/).join(" ") : i[a.name] = "" + (a.value || "")
                  }),
                    a.executing = !0,
                    f.executeFlow(g.flowId, {
                      flowAgents: c,
                      flowInputs: i
                    }).then(function(a) {
                      b.go("task.flows", {
                        event_id: a.taskId
                      })
                    }).catch(function(b) {
                      e(b, "启动流程执行"),
                        a.executing = !1
                    })
                }
              }
            }
        }
        return a("default", c),
          {
            setters: [],
            execute: function() {
              c.$inject = ["$scope", "$state", "$sessionStorage", "Utils", "handleAjaxError", "Flows", "flowData"]
            }
          }
      }),
      System.register("flows/FlowSelectToolCtrl.js", [], function(a, b) {
        "use strict";
        function c(a, b, c, d, e, f) {
          function g(a, b) {
            return {
              category: b,
              list: a
            }
          }
          function h(a) {
            return a.category.toLowerCase()
          }
          function i(a) {
            return a.name.toLowerCase()
          }
          f = _.sortBy(f, i);
          var j = _.chain(f).groupBy("category").map(g).sortBy(h).value();
          a.toolListGroup = j,
            a.toolForm = {
              toolId: a.toolId
            },
            a.search = function() {
              var b = (a.filters.q || "").toLowerCase();
              return b ? void (a.toolListGroup = _.chain(f).filter(function(a) {
                return a.name.toLowerCase().indexOf(b) !== -1
              }).groupBy("category").map(g).sortBy(h).value()) : void (a.toolListGroup = j)
            }
            ,
            a.selectTool = function(a) {
              c.close(a)
            }
            ,
            b(function() {
              $(".selected", "#select-flow-tool").scrollIntoView(!1)
            })
        }
        return a("default", c),
          {
            setters: [],
            execute: function() {
              c.$inject = ["$scope", "$timeout", "$uibModalInstance", "Tools", "handleAjaxError", "toolList"]
            }
          }
      }),
      System.register("flows/FlowsCreateCtrl.js", ["./FlowSelectToolCtrl"], function(a, b) {
        "use strict";
        function c(a, b, c, e, f, g, h, i, j, k, l, m, n, o, p) {
          function q() {
            var b = a.$$phase;
            "$apply" !== b && "$digest" !== b && a.$digest()
          }
          function r() {
            var a = d3.mouse(A[0])
              , b = D.getZoomTransform();
            return b.invert(a)
          }
          function s() {
            var a = window.innerHeight - document.querySelector(".navbar").offsetHeight - 65;
            D.setSize([A.width(), a])
          }
          function t(a) {
            "task" === a.type && _.defaults(a, {
              inputSrc: {},
              inputField: {},
              agentSrc: L,
              agentField: N
            })
          }
          function u() {
            if (null !== a.activeStep) {
              var b = _.filter(D.getAncestors(a.activeStep), function(a) {
                return a.toolData
              });
              a.inputSrcList = [M, L].concat(b),
                a.whenSrcList = [L].concat(b)
            }
          }
          function v(b) {
            a.activeStep.stepName && a.activeStep.stepName !== b || (a.activeStep.stepName = a.activeStep.toolData.name),
              a.activeStep.execUser = a.activeStep.toolData.defaultExecUser,
            "powershell" === a.activeStep.toolData.type && (a.activeStep.execUser = "Administrator"),
              a.activeStep.inputSrc = {},
              w(a.activeStep)
          }
          function w(a) {
            angular.forEach(y, function(b) {
              _.forEach(b.inputSrc, function(c, d) {
                c === a && (b.inputSrc[d] = null,
                  b.inputField[d] = null)
              }),
              b.agentSrc === a && (b.agentSrc = null,
                b.agentField = null)
            })
          }
          function x(a) {
            function b(a) {
              for (var b = !1, c = 0; c < a.length; c += 1) {
                var d = a[c];
                if (d.parents && d.parents.length > 1) {
                  b = !1;
                  break
                }
                b = !0
              }
              if (b) {
                var e = _.chain(a).reject({
                  root: !0
                }).map(function(a) {
                  return a.parents[0].stepId
                }).value()
                  , f = _.uniq(e);
                e.length !== f.length && (b = !1)
              }
              if (b) {
                var g = _.findIndex(a, {
                  root: !0
                });
                a.unshift(a[g]),
                  a.splice(g + 1, 1);
                var h = [0];
                h.push(_.findIndex(a, {
                  root: !0
                })),
                  _.forEach(a, function(b, c) {
                    if (0 !== c && b.parents && b.parents[0].stepId !== b.stepId - 1) {
                      var d = _.findIndex(a, function(a) {
                        return a.stepId === b.parents[0].stepId
                      });
                      a.splice(c, 0, a[d]);
                      for (var e = 0; e < a.length; e += 1) {
                        var f = a[e];
                        if (f.stepId === a[c].stepId && e !== c) {
                          a.splice(e, 1);
                          break
                        }
                      }
                    }
                  })
              }
            }
            var c, d = {
              name: K.name,
              flowInputs: angular.copy(K.inputList),
              flowOutputs: angular.copy(K.flowOutputs),
              stepList: []
            }, e = [], f = D.getData();
            if (f.invalid) {
              var g = "";
              return f.circled ? g = "circled" : f.detached ? g = "detached" : f.noStart && (g = "noStart"),
                {
                  invalid: !0,
                  invalidDetail: g,
                  data: []
                }
            }
            return e = f.nodes,
              d.stepList = [],
              _.some(e, function(b, f) {
                var g = f + 1
                  , h = {
                  stepId: g
                };
                if ("task" === b.type) {
                  var i;
                  if (b.agentSrc.isConst && (i = k.matchIps(b.agentField),
                    i || (c = b)),
                    c || (b.toolData && b.stepName && b.agentSrc && b.agentField && b.execUser ? _.some(b.inputSrc, function(a, c) {
                      return a && !b.inputField[c]
                    }) && (c = b) : c = b),
                    c && !a)
                    return !0;
                  h.stepName = b.stepName,
                    h.toolId = b.toolData ? b.toolData.toolId : null,
                    h.execUser = b.execUser,
                    h.failureExit = b.failureExit,
                  b.toolData.system_plugin && (h.plugin = !0);
                  var j = b.agentSrc.isConst ? "#" : _.indexOf(e, b.agentSrc) + 1
                    , l = b.agentSrc.isConst ? i.join(" ") : b.agentField === N ? "@" : b.agentField;
                  h.agents = j + "." + l,
                    angular.forEach(b.inputSrc, function(a, c) {
                      if (a && b.inputField[c]) {
                        var d = a.isConst ? "#" : _.indexOf(e, a) + 1;
                        h.inputs || (h.inputs = {});
                        var f = b.inputField[c];
                        h.inputs[c] = d + "." + (a.isConst || f !== N ? f : "@")
                      }
                    })
                } else
                  "exclusive" === b.subtype && "fork" === b.action ? (h.stepName = b.stepName,
                    h.branchLayout = b.branchLayout,
                    h.when = [],
                    _.forEach(b.whenList, function(a) {
                      if (a.src) {
                        var b = "";
                        switch (a.field) {
                          case N:
                            b = "@";
                            break;
                          case "返回码":
                            b = "$",
                              a.threshold = +a.threshold;
                            break;
                          default:
                            b = a.field
                        }
                        h.when.push({
                          key: _.indexOf(e, a.src) + 1 + "." + b,
                          comparator: a.comparator,
                          threshold: a.threshold
                        })
                      }
                    })) : "join" === b.action && (h.parent_type = "exclusive" === b.subtype ? "or" : "and");
                return _.assign(h, _.pick(b, ["type", "_x", "_y"])),
                "gateway" === h.type && _.assign(h, _.pick(b, ["subtype", "action"])),
                  _.forEach(D.links, function(a) {
                    if ("start" === a.source.type)
                      return void (a.target === b && (h.root = !0,
                        h._dx = a.source._x - h._x,
                        h._dy = a.source._y - h._y));
                    if (a.target === b) {
                      h.parents || (h.parents = []);
                      var c = _.find(_.find(e, a.source).children, function(a) {
                        return b.stepId ? a.stepId === b.stepId : a.uid === b.uid
                      })
                        , d = {
                        stepId: _.indexOf(e, a.source) + 1,
                        sourcePoint: c.sourcePoint,
                        targetPoint: c.targetPoint
                      };
                      a.branch && (d.if = +("no" === a.branch)),
                        h.parents.push(d)
                    }
                  }),
                  d.stepList.push(h),
                  !1
              }),
              b(d.stepList),
              {
                data: d,
                invalidStep: c
              }
          }
          a.isCreate = !o,
            a.isEdit = !a.isCreate,
            a.thresholdRegex = "";
          var y = [];
          a.isEdit ? (y = angular.copy(o.stepList),
          _.some(y, "root") || _.forEach(y, function(a, b) {
            0 === b ? a.root = !0 : a.parents = [{
              stepId: b
            }],
              a.stepId = b + 1,
              a.type = "task",
              a._x = 200 + 150 * b,
              a._y = 100
          })) : y = [{
            root: !0,
            _x: 200,
            _y: 100
          }],
            _.forEach(y, function(b, c) {
              if ("plugin" === b.type && (b.type = "task",
                  b.plugin = !0),
                !a.isCreate && "task" === b.type && b.toolData) {
                var d = _.keys(b.inputs)
                  , e = _.map(b.toolData.inputs, "name")
                  , f = _.difference(d, e);
                _.forEach(f, function(a) {
                  delete b.inputs[a]
                })
              }
              "task" === b.type && _.isNil(b.failureExit) && (b.failureExit = !0),
                b.uid = _.uniqueId("step"),
              b.parents && _.forEach(b.parents, function(a) {
                var d = _.find(y, function(b) {
                  return b.stepId === a.stepId
                });
                if (d) {
                  d.children || (d.children = []);
                  var e = {
                    index: c,
                    stepId: b.stepId,
                    detail: b,
                    sourcePoint: a.sourcePoint,
                    targetPoint: a.targetPoint
                  };
                  0 === a.if ? e.branch = "yes" : 1 === a.if && (e.branch = "no"),
                    d.children.push(e)
                }
              }),
                delete b.parents
            });
          var z = ".flow-viewport"
            , A = $(z)
            , B = window.innerHeight - document.querySelector(".navbar").offsetHeight - 65
            , C = {
            keyId: "uid",
            appendTo: z,
            baseHref: h.url(),
            size: [A.width(), B],
            zoomEnabled: !0,
            pullToLeft: a.isCreate
          }
            , D = new Flowchart({
            nodes: y
          },C);
          a.canUndo = !1,
            a.canRedo = !1,
            D.on("history", function() {
              a.canUndo = D.history.canUndo(),
                a.canRedo = D.history.canRedo(),
                q()
            });
          var E, F, G = {
            code: [{
              value: "equal",
              text: "等于"
            }, {
              value: "notEual",
              text: "不等于"
            }],
            content: [{
              value: "contain",
              text: "包含"
            }, {
              value: "notContain",
              text: "不包含"
            }]
          };
          D.on("activeChange", function(b, c) {
            !c || "link" === b && "exclusive-fork" !== c.source.$.category || "node" === b && "parallel-fork" === c.$.category ? (a.showPanels = !1,
              a.activeStep = null,
              a.currentType = null,
              E = F = null) : "link" === b && "exclusive-fork" === c.source.$.category ? (a.showPanels = !0,
              a.activeLink = c,
              a.currentType = b,
              E = b,
              F = c.source.$.category) : ("gateway" === c.type && "exclusive-fork" === c.$.category && (c.whenList = _.map(c.whenList, function(a) {
              return "返回码" === a.field ? a.comparatorList = G.code : a.comparatorList = G.content,
                a
            })),
            c.toolId || delete c.toolData,
            "task" === c.type && (c.failureExit = !!_.isNil(c.failureExit) || c.failureExit),
              a.showPanels = !0,
              a.activeStep = c,
              a.currentType = b,
              E = c.type,
              F = c.$.category),
              q()
          }),
            D.on("err", function(a) {
              switch (a) {
                case "multiRoot":
                  return void i.error("流程只能有一个起点");
                case "linkToStart":
                  return void i.error("不允许连回起点");
                case "removeStart":
                  return void i.error("不能删除起点");
                default:
                  i.error("流程存在错误")
              }
            }),
            a.isActive = function(a, b) {
              return a === E && !("gateway" === a && b !== F)
            }
            ,
            a.remove = function() {
              var b = a.currentType;
              if (b)
                switch (b) {
                  case "node":
                    "start" === a.activeStep.type ? i.error("不能删除起点") : D.removeNode();
                    break;
                  case "link":
                    D.unlink()
                }
            }
            ,
            D.on("stateChange", function(b) {
              a.linking = b === Flowchart.STATE_LINKING,
                q()
            }),
            a.undo = function() {
              D.undo()
            }
            ,
            a.redo = function() {
              D.redo()
            }
            ,
            a.link = function() {
              D.toLink()
            }
          ;
          var H, I = d3.select(g.document.body), J = d3.drag().on("start", function() {
            d3.event.sourceEvent.stopPropagation(),
              d3.event.sourceEvent.preventDefault(),
              D.idle(),
              I.classed("flow-dragging", !0);
            var a = r()
              , b = d3.select(this);
            H = {
              uid: _.uniqueId("step"),
              type: b.attr("data-type"),
              _new: !0,
              _temp: !0,
              _x: a[0],
              _y: a[1]
            },
            "gateway" === H.type && (H.subtype = b.attr("data-subtype") || "exclusive",
              H.action = b.attr("data-action") || "fork"),
              D.appendTempNode(H)
          }).on("drag", function() {
            var a = r();
            H._x = a[0],
              H._y = a[1],
              D.alignToGuide(H),
              H.$.tick()
          }).on("end", function() {
            I.classed("flow-dragging", !1),
              D.hideGuide().removeTempNode(H);
            var b = d3.mouse(A[0]);
            b[0] > 0 && b[1] > 0 && (delete H._temp,
              t(H),
              a.submitted = !1,
              D.appendNode(H).setActive("node", H))
          });
          d3.selectAll(".flowchart-drag-btn").call(J),
            $(g).on("resize", s);
          var K;
          K = o ? a.flowForm = _.pick(o, "name", "inputList", "flowOutputs") : a.flowForm = {
            inputList: [],
            flowOutputs: {
              dimensions: [],
              columns: []
            }
          };
          var L = {
            stepName: "流程输入",
            toolData: {}
          }
            , M = {
            stepName: "-- 常量 --",
            isConst: !0,
            toolData: {}
          }
            , N = "流程目标IP"
            , O = p;
          angular.forEach(O, function(a) {
            a.inputList = angular.copy(a.inputs),
              a.outputList = _.map(a.toolOutputs.columns, "id"),
              a.gatewayOutputList = a.outputList.concat(["返回码"])
          }),
            angular.forEach(y, function(a) {
              if ("task" === a.type) {
                a.toolData = angular.extend({}, a.toolData, _.find(O, {
                  toolId: a.toolId
                })),
                  a.execUser = a.execUser || a.toolData.defaultExecUser || "root",
                "powershell" === a.toolData.type && (a.execUser = "Administrator");
                var b = (a.agents || "0.@").split(".")
                  , c = "#" === b[0]
                  , d = +b[0]
                  , e = b.slice(1).join(".");
                a.agentSrc = c ? M : d ? y[d] : L,
                  a.agentField = c || "@" !== e ? e : N,
                  t(a),
                  angular.forEach(a.inputs, function(b, c) {
                    var d = b.split(".");
                    if (d) {
                      var e = "#" === d[0]
                        , f = +d[0]
                        , g = d.slice(1).join(".");
                      a.inputSrc[c] = e ? M : f ? y[f] : L,
                        a.inputField[c] = e || "@" !== g ? g : N
                    }
                  })
              } else
                "gateway" === a.type && "exclusive" === a.subtype && "fork" === a.action && (a.whenList = [],
                  _.forEach(a.when, function(b) {
                    var c = b.key.split(".");
                    if (c) {
                      var d = +c[0]
                        , e = c.slice(1).join(".")
                        , f = "";
                      switch (e) {
                        case "@":
                          f = N;
                          break;
                        case "$":
                          f = "返回码";
                          break;
                        default:
                          f = e
                      }
                      a.whenList.push({
                        src: d ? y[d] : L,
                        field: f,
                        comparator: b.comparator,
                        threshold: b.threshold
                      })
                    }
                  }))
            }),
            a.outputTypeList = [{
              value: "",
              text: "无"
            }, {
              value: "taskStatus",
              text: "任务状态"
            }],
            a.getOutputTypeText = function(b) {
              var c = _.find(a.outputTypeList, {
                value: b
              });
              return b && c ? c.text : ""
            }
            ,
            a.inputsSortableOptions = {
              containerPositioning: "relative",
              containment: "#flow-form-preview"
            },
            a.inputsSortableEnabled = !1,
            a.dimensionsSortableOptions = {
              containerPositioning: "relative",
              containment: "#table-outputs-dimensions"
            },
            a.dimensionsSortableEnabled = !1,
            a.columnsSortableOptions = {
              containerPositioning: "relative",
              containment: "#table-outputs-columns"
            },
            a.columnsSortableEnabled = !1,
            a.addInput = function() {
              var b = a.$new(!0);
              b.isEdit = !1,
                b.isCreate = !0;
              var c = f.open({
                templateUrl: "views/tools/_input-settings.html",
                backdrop: "static",
                scope: b,
                controller: "ToolInputSettingsCtrl"
              });
              c.result.then(function(a) {
                K.inputList.push(a)
              })
            }
            ,
            a.showInputSettings = function(b) {
              if (!a.storing) {
                var c = a.$new(!0);
                c.inputForm = angular.copy(b),
                  c.isEdit = !0,
                  c.isCreate = !1;
                var d = f.open({
                  templateUrl: "views/tools/_input-settings.html",
                  backdrop: "static",
                  scope: c,
                  controller: "ToolInputSettingsCtrl"
                });
                d.result.then(function(a) {
                  a ? _.assign(b, a) : _.remove(K.inputList, b)
                })
              }
            }
            ,
            a.addOutputsDimension = function() {
              var b = a.$new(!0);
              b.isEdit = !1,
                b.isCreate = !0,
                b.outputTypeList = a.outputTypeList;
              var c = f.open({
                templateUrl: "views/tools/_output-dimension.html",
                backdrop: "static",
                scope: b,
                controller: "ToolOutputSettingsCtrl"
              });
              c.result.then(function(a) {
                K.flowOutputs.dimensions.push(a)
              })
            }
            ,
            a.showOutputsDimensionSettings = function(b) {
              var c = a.$new(!0);
              c.outputForm = angular.copy(b),
                c.isEdit = !0,
                c.isCreate = !1,
                c.outputTypeList = a.outputTypeList;
              var d = f.open({
                templateUrl: "views/tools/_output-dimension.html",
                backdrop: "static",
                scope: c,
                controller: "ToolOutputSettingsCtrl"
              });
              d.result.then(function(a) {
                a ? _.assign(b, a) : _.remove(K.flowOutputs.dimensions, b)
              })
            }
            ,
            a.removeOutputsDimension = function(a) {
              _.remove(K.flowOutputs.dimensions, a)
            }
            ,
            a.addOutputsColumn = function() {
              var b = a.$new(!0);
              b.isEdit = !1,
                b.isCreate = !0,
                b.outputTypeList = a.outputTypeList;
              var c = f.open({
                templateUrl: "views/tools/_output-column.html",
                backdrop: "static",
                scope: b,
                controller: "ToolOutputSettingsCtrl"
              });
              c.result.then(function(a) {
                K.flowOutputs.columns.push(a)
              })
            }
            ,
            a.showOutputsColumnSettings = function(b) {
              var c = a.$new(!0);
              c.outputForm = angular.copy(b),
                c.isEdit = !0,
                c.isCreate = !1,
                c.outputTypeList = a.outputTypeList;
              var d = f.open({
                templateUrl: "views/tools/_output-column.html",
                backdrop: "static",
                scope: c,
                controller: "ToolOutputSettingsCtrl"
              });
              d.result.then(function(a) {
                a ? _.assign(b, a) : _.remove(K.flowOutputs.columns, b)
              })
            }
            ,
            a.removeOutputsColumn = function(a) {
              _.remove(K.flowOutputs.columns, a)
            }
            ,
            a.previewOutputs = function() {
              var b = a.$new(!0);
              b.outputs = K.flowOutputs,
                f.open({
                  templateUrl: "views/tools/_preview-outputs.html",
                  backdrop: "static",
                  scope: b,
                  size: K.flowOutputs.dimensions.length + K.flowOutputs.columns.length >= 5 ? "xlg" : "md"
                })
            }
            ,
            a.$watch("flowForm.inputList", function(a) {
              L.toolData.outputList = _.chain(a).map("name").compact().push(N).value()
            }, !0),
            a.addWhen = function() {
              a.activeStep.whenList || (a.activeStep.whenList = []),
                a.activeStep.whenList.push({
                  src: null,
                  field: null,
                  comparator: "equal"
                })
            }
            ,
            a.removeWhen = function(b) {
              a.activeStep.whenList.splice(b, 1)
            }
            ,
            a.$watch("activeStep", function() {
              a.activeStepIndex = a.activeStep ? _.indexOf(y, a.activeStep) + 1 : null,
                a.formCreateStep.name.$setUntouched(),
                u()
            }),
            a.$watch("activeStep.stepName", function() {
              a.activeStep && a.activeStep.$.renderText()
            }),
            a.$watch("activeStep.branchLayout", function() {
              a.activeStep && "exclusive-fork" === a.activeStep.$.category && (_.forEach(a.activeStep._links, function(b) {
                b.data.source === a.activeStep && b.tick()
              }),
                a.activeStep.$.tickBranches())
            }),
            a.subtypeChanged = function() {
              a.activeStep.$.changeJoinSubtype()
            }
            ,
            a.linkTypeChanged = function() {
              var b = a.activeLink;
              b.$.setText(b.branch.toUpperCase())
            }
            ,
            a.validateExecUser = function(b, c) {
              a.formCreateStep.execUser.$valid && (c.whiteList && c.whiteList.length ? (b = b.trim(),
              c.whiteList.indexOf(b) < 0 && a.formCreateStep.execUser.$setValidity("pattern", !1)) : c.blackList && c.blackList.length && c.blackList.indexOf(b) > -1 && a.formCreateStep.execUser.$setValidity("pattern", !1))
            }
            ,
            a.selectTool = function() {
              var b = a.$new(!0);
              b.toolId = a.activeStep.toolData && a.activeStep.toolData.toolId;
              var c = f.open({
                templateUrl: "views/flows/_select-tool.html",
                backdrop: "static",
                scope: b,
                controller: d,
                resolve: {
                  toolList: function() {
                    return O
                  }
                }
              });
              c.result.then(function(b) {
                var c = a.activeStep.toolData && a.activeStep.toolData.name;
                a.activeStep.toolId = b.toolId,
                  a.activeStep.toolData = b,
                b.system_plugin && (a.activeStep.plugin = !0),
                  v(c)
              })
            }
            ,
            a.whenFieldChanged = function(b) {
              "返回码" === b.field ? (b.comparatorList = G.code,
                a.thresholdRegex = "^\\d+$") : (b.comparatorList = G.content,
                a.thresholdRegex = "")
            }
            ,
            a.agentSrcChanged = function() {
              a.activeStep.agentField = null,
                e(function() {
                  $('.form-control[name="agentField"]').focus()
                })
            }
            ,
            a.inputSrcChanged = function(b) {
              a.activeStep.inputField[b] = null;
              var c = a.activeStep.inputSrc[b];
              c && e(function() {
                $('.form-control[name="field_' + b + '"]').focus()
              })
            }
            ,
            a.appendStepTooltipOpen = !0;
          var P;
          a.isEdit && (P = _.pick(o, "name", "flowInputs", "flowOutputs"),
            P.stepList = _.map(o.stepList, function(a) {
              return _.pick(a, "stepName", "toolId", "agents", "inputs")
            })),
            a.store = function() {
              if (a.submitted = !0,
                  a.formCreateFlow.$invalid)
                return void D.setActive("node", D.startNode);
              if (y.length < 2)
                return void j.alert({
                  type: "warning",
                  message: "流程需要包含至少一个步骤！"
                });
              var c = x()
                , d = c.data
                , e = c.invalidStep;
              if (c.invalid) {
                var f = "流程存在问题，请修改后保存。";
                switch (c.invalidDetail) {
                  case "circled":
                    f = "流程存在回环，请去除回环。";
                    break;
                  case "detached":
                    f = "流程存在分离的步骤";
                    break;
                  case "noStart":
                    f = "流程没有起点。"
                }
                return void j.alert({
                  type: "warning",
                  message: f
                })
              }
              return e ? void D.setActive("node", e) : (d.stepList.forEach(function(a) {
                a.plugin && (a.type = "plugin",
                  delete a.plugin)
              }),
                a.storing = !0,
                void (a.isEdit ? m.updateFlow(o.flowId, d).then(function() {
                  i.success("修改流程成功"),
                    b.go("flows.flow.detail", null, {
                      reload: !0
                    })
                }).catch(function(b) {
                  l(b, "修改流程"),
                    a.storing = !1
                }) : m.storeFlow(d).then(function(a) {
                  i.success("创建流程成功"),
                    b.go("flows.flow.detail", a)
                }).catch(function(b) {
                  l(b, "创建流程"),
                    a.storing = !1
                })))
            }
            ,
            a.$on("$destroy", function() {
              $(g).off("resize", s)
            })
        }
        var d;
        return a("default", c),
          {
            setters: [function(a) {
              d = a.default
            }
            ],
            execute: function() {
              c.$inject = ["$scope", "$state", "$stateParams", "$timeout", "$uibModal", "$window", "$location", "toastr", "Dialog", "Utils", "handleAjaxError", "Flows", "beforeLeave", "flowData", "toolListData"]
            }
          }
      }),
      System.register("flows/FlowsOverwriteFileCtrl.js", [], function(a, b) {
        "use strict";
        function c(a, b, c, d, e, f, g, h) {
          a.pkg = g,
            a.duplicateDetail = {},
            a.duplicateDetail.error = h,
            h.idError && h.nameError ? (a.duplicateDetail.title = "重复的流程ID和名称",
              a.duplicateDetail.type = 2) : h.idError ? (a.duplicateDetail.title = "重复的流程ID",
              a.duplicateDetail.type = 3) : h.nameError && (a.duplicateDetail.title = "重复的流程名称",
              a.duplicateDetail.type = 4),
            a.change = function(b) {
              a.renameForm = !1;
              var c = {
                newName: "",
                force: !0,
                newId: !1
              };
              "rename" === b ? d.prompt({
                message: "请输入新流程的名称",
                value: g.name,
                required: !0,
                pattern: "[\\-\\w一-龥]{1,45}",
                invalidTips: "请输入1至45个字符，只能包含中文、字母、数字、横杠或下划线",
                resolved: function(b) {
                  c.newName = b,
                    c.newId = 2 === a.duplicateDetail.type,
                    f.close(c)
                }
              }) : "replace" === b ? (c.newName = a.pkg.name,
                f.close(c)) : "keepBoth" === b && d.prompt({
                message: "请输入新流程的名称",
                value: g.name,
                required: !0,
                pattern: "[\\-\\w一-龥]{1,45}",
                invalidTips: "请输入1至45个字符，只能包含中文、字母、数字、横杠或下划线",
                resolved: function(a) {
                  c.newName = a,
                    c.newId = !0,
                    f.close(c)
                }
              })
            }
        }
        return a("default", c),
          {
            setters: [],
            execute: function() {
              c.$inject = ["$scope", "$timeout", "handleAjaxError", "Dialog", "Upload", "$uibModalInstance", "pkg", "duplicateError"]
            }
          }
      }),
      System.register("flows/FlowsImportCtrl.js", ["./FlowsOverwriteFileCtrl"], function(a, b) {
        "use strict";
        function c(a, b, c, e, f, g, h, i) {
          function j() {
            k = null,
              $('form[name="formImportFlow"] input[name="attachment"]').val(null)
          }
          var k;
          a.drop = function(a) {
            k = a
          }
            ,
            a.$watch("invalidFile", function(a) {
              a && c.alert({
                type: "warning",
                message: a.name + ": 文件不符合条件，请选择一个 tar.gz 或 tar 文件",
                callback: j
              })
            });
          var l = function(a, b) {
            var c = h.open({
              templateUrl: "views/flows/_overwrite-file.html",
              backdrop: "static",
              controller: d,
              resolve: {
                pkg: function() {
                  return a
                },
                duplicateError: function() {
                  return b
                }
              }
            });
            return c.result
          };
          a.submit = function(d, f) {
            if (!k)
              return void c.alert({
                type: "warning",
                message: "请先选择一个 tar.gz 或 tar 文件"
              });
            a.submitting = !0,
              d = f ? _.assignIn({}, {
                file: k
              }, d) : {
                file: k
              };
            var h = g.upload({
              url: "/api/flows/import",
              data: d
            });
            h.then(function(a) {
              return a.data.flowId ? void c.alert({
                type: "success",
                message: "流程已导入",
                callback: function() {
                  b.go("flows.flow.detail", {
                    flowId: a.data.flowId
                  })
                }
              }) : void e(a, "导入流程")
            }, function(b) {
              if (b.data.code === i.DUPLICATE_KEY_AND_NAME || b.data.code === i.DUPLICATE_NAME || b.data.code === i.DB_ERROR_DUPLICATE_KEY || 130307 === b.data.code) {
                var c = b.data
                  , d = c.data && c.data.error || c.error
                  , f = c.data && c.data.pkgInfo;
                l(f, d).then(function(b) {
                  a.submit(b, !0)
                }, function() {
                  a.submitting = !1
                })
              } else
                e(b, "导入流程"),
                  a.submitting = !1
            })
          }
        }
        var d;
        return a("default", c),
          {
            setters: [function(a) {
              d = a.default
            }
            ],
            execute: function() {
              c.$inject = ["$scope", "$state", "Dialog", "handleAjaxError", "toastr", "Upload", "$uibModal", "IMPORT_ERROR"]
            }
          }
      }),
      System.register("flows/states.js", ["./FlowsIndexCtrl", "./FlowAbstractCtrl", "./FlowDetailCtrl", "./FlowExecuteCtrl", "./FlowsCreateCtrl", "./FlowsImportCtrl"], function(a, b) {
        "use strict";
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        return {
          setters: [function(a) {
            c = a.default
          }
            , function(a) {
              d = a.default
            }
            , function(a) {
              e = a.default
            }
            , function(a) {
              f = a.default
            }
            , function(a) {
              g = a.default
            }
            , function(a) {
              h = a.default
            }
          ],
          execute: function() {
            i = {
              name: "flows",
              url: "/flow",
              abstract: !0,
              templateUrl: "views/delivery/delivery.html",
              controller: "DeliveryAbstractCtrl"
            },
              j = {
                name: "flows.index",
                url: "?page&q",
                params: {
                  q: {
                    dynamic: !0,
                    value: "",
                    squash: !0
                  },
                  page: {
                    type: "int",
                    dynamic: !0,
                    value: 1,
                    squash: !0
                  }
                },
                templateUrl: "views/flows/index.html",
                controller: c,
                resolve: {
                  flowListData: ["Flows", function(a) {
                    return a.fetchFlowList()
                  }
                  ]
                }
              },
              k = {
                name: "flows.create",
                url: "/create",
                templateUrl: "views/flows/create.html",
                controller: g,
                resolve: {
                  flowData: function() {
                    return null
                  },
                  toolListData: ["Tools", function(a) {
                    return a.fetchToolList({
                      detail: "true",
                      plugin: "true"
                    })
                  }
                  ],
                  deps: ["depends", function(a) {
                    return a("components/flowchart")
                  }
                  ]
                }
              },
              l = {
                name: "flows.import",
                url: "/import",
                templateUrl: "views/flows/import.html",
                controller: h
              },
              m = {
                name: "flows.flow",
                url: "/{flowId:hashId}",
                abstract: !0,
                template: "<div ui-view></div>",
                controller: d,
                resolve: {
                  flowData: ["$stateParams", "Flows", function(a, b) {
                    return b.fetchFlow(a.flowId)
                  }
                  ]
                }
              },
              n = {
                name: "flows.flow.detail",
                url: "",
                templateUrl: "views/flows/detail.html",
                controller: e,
                resolve: {
                  deps: ["depends", function(a) {
                    return a("components/flowchart")
                  }
                  ]
                }
              },
              o = {
                name: "flows.flow.execute",
                url: "/execute",
                templateUrl: "views/flows/execute.html",
                controller: f
              },
              p = {
                name: "flows.flow.edit",
                url: "/edit?step",
                templateUrl: "views/flows/create.html",
                controller: g,
                resolve: {
                  toolListData: ["Tools", function(a) {
                    return a.fetchToolList({
                      detail: "true",
                      plugin: "true"
                    })
                  }
                  ],
                  deps: ["depends", function(a) {
                    return a("components/flowchart")
                  }
                  ]
                }
              },
              q = [i, j, k, l, m, n, o, p],
              r = {
                states: q
              },
              a("default", r)
          }
        }
      });
  }
)(System, System);
