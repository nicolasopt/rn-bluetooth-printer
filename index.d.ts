export class BluetoothManager {
  EVENT_DEVICE_ALREADY_PAIRED: any;
  EVENT_DEVICE_DISCOVER_DONE: any;
  EVENT_DEVICE_FOUND: any;
  EVENT_CONNECTION_LOST: any;
  EVENT_UNABLE_CONNECT: any;
  EVENT_CONNECTED: any;
  EVENT_BLUETOOTH_NOT_SUPPORT: any;
  isBluetoothEnabled: () => Promise<boolean>;
  enableBluetooth: () => Promise<any>;
  disableBluetooth: () => Promise<any>;
  scanDevices: () => Promise<any[]>;
  connect: (address: any) => Promise<any>;
}
export class BluetoothTscPrinter {
  DIRECTION: { FORWARD: 0 | 1; BACKWARD: 0 | 1 };
  TEAR: "ON" | "OFF";
  SOUND: 0 | 1;
  FONTTYPE: {
    FONT_1: "1";
    FONT_2: "2";
    FONT_3: "3";
    FONT_4: "4";
    FONT_5: "5";
    FONT_6: "6";
    FONT_7: "7";
    FONT_8: "8";
    SIMPLIFIED_CHINESE: "TSS24.BF2";
    TRADITIONAL_CHINESE: "TST24.BF2";
    KOREAN: "K";
  };
  ROTATION: {
    ROTATION_0: 0;
    ROTATION_90: 90;
    ROTATION_180: 180;
    ROTATION_270: 270;
  };
  FONTMUL: {
    MUL_1: 1;
    MUL_2: 2;
    MUL_3: 3;
    MUL_4: 4;
    MUL_5: 5;
    MUL_6: 6;
    MUL_7: 7;
    MUL_8: 8;
    MUL_9: 9;
    MUL_10: 10;
  };
  EEC: {
    LEVEL_L: "L";
    LEVEL_M: "M";
    LEVEL_Q: "Q";
    LEVEL_H: "H";
  };
  BITMAP_MODE: { OVERWRITE: 0; OR: 1; XOR: 2 };
  BARCODETYPE: {
    CODE128;
    CODE128M;
    EAN128;
    ITF25;
    ITF25C;
    CODE39;
    CODE39C;
    CODE39S;
    CODE93;
    EAN13;
    EAN13_2;
    EAN13_5;
    EAN8;
    EAN8_2;
    EAN8_5;
    CODABAR;
    POST;
    UPCA;
    UPCA_2;
    UPCA_5;
    UPCE;
    UPCE_2;
    UPCE_5;
    CPOST;
    MSI;
    MSIC;
    PLESSEY;
    ITF14;
    EAN14;
  };
  ALIGN: { LEFT: number; CENTER: number; RIGHT: number };
  ERROR_CORRECTION: { L; M; Q; H };
  printLabel: (options: any) => Promise<any>;
  printerInit: (i?: number) => Promise<any>;
  printAndFeed: (i: number) => Promise<any>;
  printerLeftSpace: (i: number) => Promise<any>;
  printerLineSpace: (i: number) => Promise<any>;
  printerUnderLine: (i: number) => Promise<any>;
  printerAlign: (i: number) => Promise<any>;
  setWidth: (i: number) => Promise<any>;
  printText: (text: string, options: any) => Promise<any>;
  printColumn: (cw: any[], ca: any[], options: any) => Promise<any>;
  printPic: (base64: string, options: any) => Promise<any>;
  rotate: () => Promise<any>;
  setBlob: (i: number) => Promise<any>;
  printQRCode: (
    content: string,
    size: number,
    correctionLevel: number,
    leftPadding: number
  ) => Promise<any>;
  printBarCode: (
    content: string,
    nType: number,
    nWidthX: number,
    nHeight: number,
    nHriFontType: number,
    nHriFontPosition: number
  ) => Promise<any>;
}
export class DeviceEventEmitter {
  addListener: (eventType: any, callback: (rsp: any) => void) => void;
}
