function myFunction() {
  const form = FormApp.openById('1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k');
//  console.log(form.getItems()[0].asDateItem().includesYear());
//  form.addDateItem().setTitle("This is a DateItem");
//  form.addDateTimeItem().setTitle("This is a DateTimeItem");
//  form.addTimeItem().setTitle("This is a TimeItem");
//  form.addDurationItem().setTitle("This is a DurationItem");
  form.addDateItem().setIncludesYear(false);
}
