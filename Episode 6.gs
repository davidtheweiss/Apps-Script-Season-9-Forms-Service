function myFunction() {
  const form = FormApp.openById('1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k');
  const listOfCountries = ['Argentina', 'Australia', 'Brazil', 'Canada', 'China', 'Ecuador', 'Finland', 'France', 'Germany', 'India', 'Italy', 'Japan', 'Netherlands', 'Russia', 'South Africa', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom', 'United States of America'];

//  console.log(form.getItems()[0].asCheckboxItem().getChoices().map(choice => choice.getValue()));
//  form.addListItem().setTitle("Please select your country").setChoiceValues(listOfCountries);
//  const multipleChoiceItem = form.addMultipleChoiceItem().setTitle("Please select your language");
//  
//  const englishForm = form.addPageBreakItem().setTitle("Hello, and Welcome!");
//  const spanishForm = form.addPageBreakItem().setTitle("¡Hola y bienvenido!");
//  
//  multipleChoiceItem.setChoices([
//    multipleChoiceItem.createChoice("English", englishForm),
//    multipleChoiceItem.createChoice("Español", spanishForm)
//  ]);
  
  
  form.addMultipleChoiceItem().setChoiceValues(['Orange', 'Red', 'Blue']).showOtherOption(true);
  
  
  
  
  

}
