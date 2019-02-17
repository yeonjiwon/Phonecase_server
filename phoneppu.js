const request=require('request');
const cheerio = require('cheerio');

var webdriver = require('./node_modules/selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// 폰뿌_갤럭시
var func_galaxy=new Promise(async function(resolve, reject){
    await driver.get('http://www.phoneppu.com/product/list.html?cate_no=334')
    var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
    links.forEach(element => {
        var name = element.findElement(By.css('a')).getText()
        var url = element.findElement(By.css('a')).getAttribute('href')
        url.then((case_url)=>{
            name.then((case_name)=>{
                case_name=case_name.replace("Galaxy","갤럭시").replace("NOTE","노트").replace("Edge","엣지")
                console.log("이름 :  "+case_name)
                // request(case_url,function(error, response, body){
                // if(error) throw error
                // $= cheerio.load(body);
                // let json=[], name, price, img, url, type
                // $('ul.prdList.column4>li>div.box').each(function(index, ele){
                //     name=$(this).find('p.name>a>span').text()
                //     price=$(this).find('ul>li>span[style*="color:#222222"]').text().replace("원","")
                //     img=$(this).find('a>img').attr('src')
                //     url=$(this).find('a').attr('href')
                //     img='http:'+img
                //     url='http://www.phoneppu.com/'+url
                //     json.push({name:name, price:price, img:img, url:url, type:case_name})
                // });
                // console.log(json)
                // resolve(json)
                // })
            })
        })
       
    });
})


//폰뿌_LG/OPTIMUS
// var func_lg=new Promise(async function(resolve, reject){
//     await driver.get('http://www.phoneppu.com/product/list.html?cate_no=335')
//     var links=await driver.findElements(By.css('div#container>div#contents> div> ul.menuCategory>li'))
//     links.forEach(element => {
//         var name = element.findElement(By.css('a')).getText()
//         var url = element.findElement(By.css('a')).getAttribute('href')
//         url.then((case_url)=>{
//             name.then((case_name)=>{
//                 console.log(" / "+case_name)
//                 // request(case_url,function(error, response, body){
//                 // if(error) throw error
//                 // $= cheerio.load(body);
//                 // let json=[], name, price, img, url, type
//                 // $('ul.prdList.column4>li>div.box').each(function(index, ele){
//                 //     name=$(this).find('p.name>a>span').text()
//                 //     price=$(this).find('ul>li>span[style*="color:#222222"]').text().replace("원","")
//                 //     img=$(this).find('a>img').attr('src')
//                 //     url=$(this).find('a').attr('href')
//                 //     img='http:'+img
//                 //     url='http://www.phoneppu.com/'+url
//                 //     json.push({name:name, price:price, img:img, url:url, type:case_name})
//                 // });
//                 // console.log(json)
//                 // resolve(json)
//                 // })
//             })
//         })
       
//     });
// })

