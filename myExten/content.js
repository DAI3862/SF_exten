function clickAllViewAnswers() {
  const xpath = "//p//span[contains(@title,'View Answer')]";
  const elements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  
  for (let i = 0; i < elements.snapshotLength; i++) {
    elements.snapshotItem(i).click();
  }
}

clickAllViewAnswers();
