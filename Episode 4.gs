function myFunction() {
  const form = FormApp.openById('1fow-rrkfXb4g1K4cwTvehcdLnC77e9JlqdI8pEQ4Z4k');
  const imageItem = form.getItemById(1094293319);
  const imageBlob = UrlFetchApp.fetch('https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg').getBlob();
  const youtubeUrl = 'https://www.youtube.com/watch?v=QpXtV3tYWKM';
  
//  imageItem.asImageItem();
//  form.addSectionHeaderItem().setTitle('My Section Header Item');
  
//  const pageTwo = form.addPageBreakItem().setTitle('Page 2');
//  const pageThree = form.addPageBreakItem().setTitle('Page 3');
//  const pageFour = form.addPageBreakItem().setTitle('Page 4');
  
//  pageTwo.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  
//  form.addImageItem().setImage(imageBlob).setAlignment(FormApp.Alignment.CENTER).setWidth(100);
  form.addVideoItem().setVideoUrl(youtubeUrl);
  
  
}
