
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


// driver.findElement(By.css('#contents > div.xans-element-.xans-product.xans-product-menupackage > ul > li:nth-child(1)>a')).getText(),
// console.log("기종은 : "+text)



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


// var webdriver = require('./node_modules/selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

//     var driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();


// driver.get('http://www.phoneppu.com/product/list.html?cate_no=334')
// .then(function(){
//     return driver.getCurrentUrl();
// })
// .then(function(currentUrl){
//     console.log(currentUrl)
// }).then(()=>{
//     var staleElement= true;
//     var i=1;
//     while(staleElement && i<5){
//         console.log("while시작")
//         staleElement=false;
//         var url=driver.findElement(By.css('#contents > div.xans-element-.xans-product.xans-product-menupackage > ul > li:nth-child('+i+')'))
//         url.click().then(function(){
//             return driver.getCurrentUrl();  
//         })
//         .then(function(currentUrl){
//             console.log(currentUrl+" i : "+i)
//             i++;
//             staleElement=true;
//             driver.navigate().back()
//             console.log("i : "+i+" staleElement :  "+staleElement) 
//          })
//         } 
// })


  //현재페이지 url알아내는 방법  
    // .then(()=>{
    //     driver.navigate().back()
    //     // console.log(driver.getCurrentUrl().toString())
    //     // var url=driver.getCurrentUrl().toString()
    //     // console.log(url)
    // })


//기종이름알아내는 방법
// var case_name = driver.findElement(By.css('#contents > div.xans-element-.xans-product.xans-product-menupackage > ul > li:nth-child('+i+')>a')).getText()
// case_name.then((text)=>{
// console.log(text)
// })
    









var webdriver = require('./node_modules/selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//폰뿌_갤럭시
// (async function(){
//     await driver.get('http://www.phoneppu.com/product/list.html?cate_no=334')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//폰뿌_LG/OPTIMUS
// (async function(){
//     await driver.get('http://www.phoneppu.com/product/list.html?cate_no=335')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//썸케이스_갤럭시
// (async function(){
//     await driver.get('http://somecase.co.kr/product/list.html?cate_no=27')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log("이름 : "+ name)
//         })
//     });
// })()


//썸케이스_LG/OPTIMUS
// (async function(){
//     await driver.get('http://somecase.co.kr/product/list.html?cate_no=28')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//셰이플리_갤럭시시리즈
// (async function(){
//     await driver.get('https://shapely.co.kr/product/list.html?cate_no=334')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> table.menuCategory>tbody>tr>td>ul>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             var case_name=name.replace("★","")
//             console.log(" name : "+ case_name)
//         })
       
//     });
// })()


//셰이플리_갤럭시노트
(async function(){
    await driver.get('https://shapely.co.kr/product/list.html?cate_no=772')
    var links=await driver.findElements(By.css('div#container>div#contents> div> table.menuCategory>tbody>tr>td>ul>li'))
    links.forEach(element => {
        var name = element.findElement(By.css('a')).getText()
        var url = element.findElement(By.css('a')).getAttribute('href')
        name.then((name)=>{
            var case_name=name.replace("★","").replace("'('?')';","C")
            console.log(" name : "+ case_name)
        })
       
    });
})()


//셰이플리_LG시리즈
// (async function(){
//     await driver.get('https://shapely.co.kr/product/list.html?cate_no=335')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> table.menuCategory>tbody>tr>td>ul>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//뿌잉몰_갤럭시
// (async function(){
//     await driver.get('https://ppuingmall.com/product/list.html?cate_no=26')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//뿌잉몰_LG/OPTIMUS
// (async function(){
//     await driver.get('https://ppuingmall.com/product/list.html?cate_no=27')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//올댓케이스_갤럭시
// (async function(){
//     await driver.get('http://allthatcase.co.kr/product/list.html?cate_no=66')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//올댓케이스_LG
// (async function(){
//     await driver.get('http://allthatcase.co.kr/product/list.html?cate_no=36')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//올댓케이스_베가
// (async function(){
//     await driver.get('http://allthatcase.co.kr/product/list.html?cate_no=37')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//바비럽_갤럭시
// (async function(){
//     await driver.get('http://babiluv.com/product/list.html?cate_no=43')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//바비럽_갤럭시노트
// (async function(){
//     await driver.get('http://babiluv.com/product/list.html?cate_no=44')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//바비럽_엘지
// (async function(){
//     await driver.get('http://babiluv.com/product/list.html?cate_no=45')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()



//바비럽_베가/기타
// (async function(){
//     await driver.get('http://babiluv.com/product/list.html?cate_no=46')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//아델리안_갤럭시
// (async function(){
//     await driver.get('https://adellian.com/goods/goods_list.php?cateCd=001')
//     var links=await driver.findElements(By.css('div#container>div#content>div.contents> div.view>div.cg-main> ul.lower-category>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//아델리안_엘지
// (async function(){
//     await driver.get('https://adellian.com/goods/goods_list.php?cateCd=003')
//     var links=await driver.findElements(By.css('div#container>div#content>div.contents> div.view>div.cg-main> ul.lower-category>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//폰키파_갤럭시
// (async function(){
//     await driver.get('http://ponkipa.com/goods/goods_list.php?cateCd=125')
//     var links=await driver.findElements(By.css('div#container>div#content>div.contents> div.view>div.cg-main> ul.lower-category>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//폰키파_엘지
// (async function(){
//     await driver.get('http://ponkipa.com/goods/goods_list.php?cateCd=127')
//     var links=await driver.findElements(By.css('div#container>div#content>div.contents> div.view>div.cg-main> ul.lower-category>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//소다케이스_갤럭시
// (async function(){
//     await driver.get('http://sodacase.co.kr/product/list.html?cate_no=25')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//소다케이스_LG/옵티머스
// (async function(){
//     await driver.get('http://sodacase.co.kr/product/list.html?cate_no=26')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


//소다케이스_베가
// (async function(){
//     await driver.get('http://sodacase.co.kr/product/list.html?cate_no=27')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         name.then((name)=>{
//             console.log(" name : "+ name)
//         }).then(
//             url.then((url)=>{
//                 console.log(" url : "+ url)
//             })
//         )
       
//     });
// })()


