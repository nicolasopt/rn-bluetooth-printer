export module BluetoothManager {
  export const EVENT_DEVICE_ALREADY_PAIRED: any;
  export const EVENT_DEVICE_DISCOVER_DONE: any;
  export const EVENT_DEVICE_FOUND: any;
  export const EVENT_CONNECTION_LOST: any;
  export const EVENT_UNABLE_CONNECT: any;
  export const EVENT_CONNECTED: any;
  export const EVENT_BLUETOOTH_NOT_SUPPORT: any;
  export function isBluetoothEnabled(): Promise<boolean>;
  export function enableBluetooth(): Promise<any>;
  export function disableBluetooth(): Promise<any>;
  export function scanDevices(): Promise<any>;
  export function connect(address: any): Promise<any>;
}
export module BluetoothTscPrinter {
  export const DIRECTION: { FORWARD: 0 | 1; BACKWARD: 0 | 1 };
  export const TEAR: "ON" | "OFF";
  export const SOUND: 0 | 1;
  export const FONTTYPE: {
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
  export const ROTATION: {
    ROTATION_0: 0;
    ROTATION_90: 90;
    ROTATION_180: 180;
    ROTATION_270: 270;
  };
  export const FONTMUL: {
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
  export const EEC: {
    LEVEL_L: "L";
    LEVEL_M: "M";
    LEVEL_Q: "Q";
    LEVEL_H: "H";
  };
  export const BITMAP_MODE: { OVERWRITE: 0; OR: 1; XOR: 2 };
  export const BARCODETYPE: {
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
  export const ALIGN: { LEFT: number; CENTER: number; RIGHT: number };
  export const ERROR_CORRECTION: { L; M; Q; H };
  export function printLabel(options: any): Promise<any>;
}
export module BluetoothEscposPrinter {
  export const ALIGN: { LEFT: number; CENTER: number; RIGHT: number };
  export const ERROR_CORRECTION: { L; M; Q; H };
  export function printerInit(i?: number): Promise<any>;
  export function printAndFeed(i: number): Promise<any>;
  export function printerLeftSpace(i: number): Promise<any>;
  export function printerLineSpace(i: number): Promise<any>;
  export function printerUnderLine(i: number): Promise<any>;
  export function printerAlign(i: number): Promise<any>;
  export function setWidth(i: number): Promise<any>;
  export function printText(text: string, options?: any): Promise<any>;
  export function printColumn(cw: any[], ca: any[], ct: string[], options?: any): Promise<any>;
  export function printPic(base64: string, options?: any): Promise<any>;
  export function rotate(): Promise<any>;
  export function setBlob(i: number): Promise<any>;
  export function printQRCode(
    content: string,
    size: number,
    correctionLevel: number,
    leftPadding: number
  ): Promise<any>;
  export function printBarCode(
    content: string,
    nType: number,
    nWidthX: number,
    nHeight: number,
    nHriFontType: number,
    nHriFontPosition: number
  ): Promise<any>;
}
