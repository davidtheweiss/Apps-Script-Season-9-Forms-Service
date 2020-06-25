function myFunction() {
  //FormApp.create("My Form");
  const form = FormApp.openByUrl('https://docs.google.com/forms/d/1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k/edit');
  console.log(form);
}
