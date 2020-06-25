function myFunction() {
  const form = FormApp.openById('1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k');
  const rowData = ['Eiffel Tower', 'Taj Mahal', 'Machu Picchu', 'Statue of Liberty'];
  const columnData = ['Peru', 'France', 'United States', 'India'];
  
//  console.log(form.getItems()[0].asCheckboxGridItem().getRows());
//  form.addCheckboxGridItem();
//  form.addGridItem().setTitle("Where are these landmarks located?")
//  .setRows(rowData)
//  .setColumns(columnData);
  form.addScaleItem().setTitle("How are you feeling today?")
  .setBounds(1, 7)
  .setLabels("Terrible", "Terrific");
}
