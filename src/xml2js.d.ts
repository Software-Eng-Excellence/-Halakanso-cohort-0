declare module 'xml2js' {
    export function parseStringPromise(xml: string): Promise<any>;
    //This function takes an XML string (xml: string) as input 
    // and returns a Promise that resolves to a parsed JavaScript objec
    export class Builder {
      buildObject(obj: any): string;
    }
  }