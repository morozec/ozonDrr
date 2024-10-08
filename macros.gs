  // const ROW_NUMBER_CELL = 'J3';
  const ROW_NUMBER = 220;
  const MAIN_TODAY_RANGE = 'A4:F4';

function myFunction() {
  processMain();
  processGoods();
};

const processMain = () => {
  const mainSheet = SpreadsheetApp.getActive().getSheetByName('ДРР')
  const pasteCell = mainSheet.getRange(`A${ROW_NUMBER}`);
  mainSheet.getRange(MAIN_TODAY_RANGE).copyTo(pasteCell, SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
}

const START_GOODS_SHEET = 5;
const END_GOODS_SHEET = 10;
const GOODS_TODAY_RANGE = 'A4:BK4';

const processGoods = () => {
  for (let i = START_GOODS_SHEET; i < END_GOODS_SHEET; ++i) {
    const goodsSheet = SpreadsheetApp.getActive().getSheets()[i];
    const pasteCell = goodsSheet.getRange(`A${ROW_NUMBER}`);
    goodsSheet.getRange(GOODS_TODAY_RANGE).copyTo(pasteCell, SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  }
}
