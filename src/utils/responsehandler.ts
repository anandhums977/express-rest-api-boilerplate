export class ResponseHandler {
    success(data?: any, message: string = "Operation successful.",status=200) {
      return {
        success: true,
        status,
        message,
        data,
        error: null,
      };
    }
  
    error(code?: number, message?: string) {
      return {
        success: false,
        data: null,
        error: {
          status: code,
          message,
        },
      };
    }
  }
  
  export default new ResponseHandler();