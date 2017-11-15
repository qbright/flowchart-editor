enum ErrorType {
  CONTAINER_NO_FIND = "container_no_find"
}

class ErrorHandler {
  static throwError (errMsg: ErrorType) {
    throw new Error(errMsg);
  }
}

export default ErrorHandler;

export {ErrorType};


