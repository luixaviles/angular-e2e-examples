describe('Customer test cases.', function() {
  it('Should load customers data', function(){
    browser.get('http://localhost:9000/customers');
    expect(element.all(by.repeater('row in renderedRows')).count()).toBeGreaterThan(0);
  });

  it('Should iterate all grid elements', function(){
    browser.get('http://localhost:9000/customers');
    element.all(by.binding('row.entity.id')).each(function(cell){
      browser.sleep(500);
      cell.click();
      cell.getText().then(function(text){
        console.log('Id: ' + text);
      });
    });
    element.all(by.binding('row.entity.name')).each(function(cell){
      browser.sleep(500);
      cell.click();
      cell.getText().then(function(name){
        console.log('Name: ' + name);
      });
    });
    element.all(by.model('row.entity.comment')).each(function(cell){
      browser.sleep(500);
      cell.click();
      cell.sendKeys('New customer.');
    });
    browser.sleep(2000);
  });
});