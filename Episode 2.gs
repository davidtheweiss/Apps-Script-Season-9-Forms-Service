function myFunction() {
  const form = FormApp.openByUrl('https://docs.google.com/forms/d/1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k/edit');
//  form.setTitle("My New Title")
//  .setDescription("Please Complete this Form for the good of Humanity")
//  .setCollectEmail(true);
//  form.setDestination(FormApp.DestinationType.SPREADSHEET, '1IvWqLb0XZp52G9OsotBlo431KBebT0fT3duNg7cwEtE');
//  form.setConfirmationMessage("Thank you for completing this Form")
//  .setLimitOneResponsePerUser(true);
  const my_form = FormApp.create(title)
  const url = my_form.getPublishedUrl()
  GmailApp.sendEmail(recipient, subject, `Check out my Form here: ${url}`);
}
