function myFunction() {
  const form = FormApp.openById('1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k');
  const item = form.getItemById(135064855);
//  form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
//  const items = form.getItems();
//  for (item of items) {
//    switch (item.getType().toString()) {
//      case 'MULTIPLE_CHOICE':
//        console.log("This is multiple choice");
//        break;
//      default:
//        console.log("This is not a multiple choice");
//    }
//  }
  item.setTitle("My newest title").setHelpText("Please pick the appropriate answer");
}
