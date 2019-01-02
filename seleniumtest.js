
// const {Builder, By, Key, until} = require('selenium-webdriver');
// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('http://phoneppu.com/product/list.html?cate_no=334');
//     await driver.findElement(By.css_selector('#css>div.menuCategory>li')).click();
//     console.log()
//     // sendKeys('webdriver', Key.RETURN);find_element_by_css_selector(‘#css > div.selector’)
//     // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     // await driver.quit();
//   }
// })();



// //웹드라이버초기화
// const webdriver = require('selenium-webdriver');
// const By = webdriver.By;
// //사용할 브라우저드라이버초기화
// const chrome = require('selenium-webdriver/chrome');
// //드라이버초기화
// const driver = new webdriver.Builder().forBrowser('chrome').build();
// //드라이버사용
// const el = driver.findElement(By.id('q')); //엘리먼트를 얻고
// console.log(el.getText()); //무언가 함




// //웹드라이버, By, 크롬드라이버 준비
// const webdriver = require('selenium-webdriver'), By = webdriver.By;
// const chrome = require('selenium-webdriver/chrome');
 
// //워커와 레포트 준비
// const worker = new webdriver.Builder().forBrowser('chrome').build();
// const report = new webdriver.Builder().forBrowser('chrome').build();
 
// //레포트의 준비
// const reportUrl = 'http://www.bsidesoft.com/hika/wp/2196/report.html';
// report.get(reportUrl);
 
// //테스트시작
// const testUrl = 'http://www.bsidesoft.com/hika/wp/2196/test1.html';
// worker.get(testUrl);
// worker.findElement(By.id('test1')).getText().then(
//   v=>report.executeScript(
//     `document.getElementById('report').innerHTML += "<li>${v == 'abc'}</li>";`
//   )
// );




// const selenium =require('selenium-webdriver')
// const driver = require('selenium-webdriver/chrome');

// driver.get('https://nid.naver.com/nidlogin.login')
// driver.find_element_by_name('id').send_keys('duswldnjs514')
// driver.find_element_by_name('pw').send_keys('duswldnjs')

// driver.find_element_by_xpath('//*[@id="frmNIDLogin"]/fieldset/input').click()



var webdriver = require('./node_modules/selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.phoneppu.com/product/list.html?cate_no=334');

driver.findElement(By.cssSelector('ul.menuCategory>li>a')


// driver.findElement(By.linkText('//*[@id="contents"]/div[2]/ul/li[1]/a')).click()



// driver.wait(check_title, 20000);

// function check_title() {
//   return driver.getTitle().then(function (titlse) {
    
//     console.log('title : '+ title)
//     // if (title === 'wiki') {
//     //   console.log('success');
//     //   return true;
//     // } else {
//     //   console.log('fail -- ' + title);
//     // }
//   });
// }
