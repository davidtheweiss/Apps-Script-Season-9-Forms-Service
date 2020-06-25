function myFunction() {
  const form = FormApp.openById('1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k');
  form.setIsQuiz(true);
//  form.getItems()[0].asParagraphTextItem()
//  form.addTextItem().setTitle("Our Text Item");
//  form.addTextItem().setRequired(true);
  form.addTextItem().setTitle("When did the Battle of Hastings occur?")
  .setGeneralFeedback(
    FormApp.createFeedback()
    .setText("The Battle of Hastings didn't actually occur in Hastings")
    .build()
  );
}
