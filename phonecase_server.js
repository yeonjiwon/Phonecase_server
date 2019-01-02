const request=require('request');
const cheerio = require('cheerio');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/phonecasedata";

//폰뿌
// var func_phoneppu= new Promise(function (resolve, reject){
//     request('http://www.phoneppu.com/product/list.html?cate_no=2511',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.column4>li>div.box').each(function(index, ele){
//             name=$(this).find('p.name>a>span').text()
//             price=$(this).find('ul>li>span').text().replace("원","")
//             img=$(this).find('a>img').attr('src')
//             url=$(this).find('a').attr('href')
//             img='http:'+img
//             url='http://www.phoneppu.com/'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//썸케이스
// var func_somecase= new Promise(function (resolve, reject){
//     request('http://somecase.co.kr/product/list.html?cate_no=961',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.column4>li>div.box').each(function(index, ele){
//             name=$(this).find('p.name>a>span').text()
//             price=$(this).find('ul>li>span').text().replace("원","")
//             img=$(this).find('a>img').attr('src')
//             url=$(this).find('a').attr('href')
//             img='http:'+img
//             url='http://somecase.co.kr/'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//셰이플리
// var func_shapely= new Promise(function (resolve, reject){
//     request('https://shapely.co.kr/product/list.html?cate_no=2171',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.grid5>li>div#info').each(function(index, ele){
//             name=$(this).find('div.description>strong.name>a>span:nth-child(2)').text()
//             price=$(this).find('div.description>ul>li:nth-child(1) > span:nth-child(2)').text().replace("원","")
//             img=$(this).find('div.thumbnail>a>img').attr('src')
//             url=$(this).find('div.thumbnail>a').attr('href')
//             img='http:'+img
//             url='https://shapely.co.kr'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//뿌잉몰
// var func_ppuingmall= new Promise(function (resolve, reject){
//     request('https://ppuingmall.com/product/list.html?cate_no=335',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.column5>li>div.box').each(function(index, ele){
//             name=$(this).find('p.name>a>span').text()
//             price=$(this).find('ul>li>span[style*="color:#ff6b75"]').text().replace("원","")
//             img=$(this).find('a>img').attr('src')
//             url=$(this).find('a').attr('href')
//             img='http:'+img
//             url='https://ppuingmall.com/'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//올댓케이스
// var func_allthatcase= new Promise(function (resolve, reject){
//     request('http://allthatcase.co.kr/product/list.html?cate_no=1365',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.grid5>li').each(function(index, ele){
//             name=$(this).find('div.info>p.name>a>span[style*="color:#555555"]').text()
//             price=$(this).find('div.info>ul>li>span[style*="color:#333333"]').text().replace("원","")
//             img=$(this).find('div.thumbnail>a>img').attr('src')
//             url=$(this).find('div.info>p.name>a').attr('href')
//             img='http:'+img
//             url='http://allthatcase.co.kr/'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//바비럽
// var func_babiluv= new Promise(function (resolve, reject){
//     request('http://babiluv.com/product/list.html?cate_no=1634',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.grid4>li').each(function(index, ele){
//             name=$(this).find('div.description>strong.name>a>span[style*="color:#555555"]').text()
//             price=$(this).find('div.description>ul>li>span[style*="font-weight:bold"]').text().replace("원","")
//             img=$(this).find('div.thumbnail>a>img').attr('src')
//             url=$(this).find('div.thumbnail>a').attr('href')
//             img='http:'+img
//             url='http://babiluv.com/'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
//         console.log(json)
//         resolve(json)
//     })
// }
// )

//아델리안
// var func_adellian= new Promise(function (resolve, reject){
//     request('https://www.adellian.com/goods/goods_list.php?cateCd=001064',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('div.goods-list>div>div.list>ul>li>div.space').each(function(index, ele){
//             name=$(this).find('div.txt>a>strong').text()
//             price=$(this).find('div.price.gd-default>span.cost>strong').text().trim(price)
//             img=$(this).find('div.thumbnail>a>img').attr('src')
//             url=$(this).find('div.thumbnail>a').attr('href')
//             url=url.substr(2,url.length)
//             url='https://www.adellian.com'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//꽁몰-----이미지X----
// var func_kkongmall= new Promise(function (resolve, reject){
//     request('https://smartstore.naver.com/kkongmall/category/3b9737a43f4c4d7d8aa9691df0894ab1?cp=1',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('div#content>div>form>div>ul.list>li.item').each(function(index, ele){
//             name=$(this).find('a>strong.title').attr('title')
//             price=$(this).find('a>div.area_price>strong:nth-child(1)>span.number').text()
//             img=$(this).find('a>div.thumbnail>img').attr('src')
//             url=$(this).find('a').attr('href')
//             url='https://smartstore.naver.com'+url
//             json.push({name:name, price:price, img:img, url:url})
//         });
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )

//폰키파
// var func_ponkipa= new Promise(function (resolve, reject){
//     request('http://ponkipa.com/goods/goods_list.php?cateCd=125069',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('div.contents>div.view>div.cg-main>div.goods-list>div>div.list>ul>li>div.space').each(function(index, ele){
//             name=$(this).find('div.txt>a>strong').text()
//             price=$(this).find('div.price.gd-default>span.cost>strong').text().trim(price)
//             img=$(this).find('div.thumbnail>a>img').attr('src')
//             url=$(this).find('div.thumbnail>a').attr('href')
//             url=url.substr(2,url.length)
//             img="http://ponkipa.com"+img
//             url='http://ponkipa.com'+url
//             json.push({name:name, price:price, img:img, url:url})
//         })
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//디팍스 --- 상품명 수정!!
// var func_dparks= new Promise(function (resolve, reject){
//     request('http://dparks.co.kr/product/list.html?cate_no=393',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.grid4>li').each(function(index, ele){
//             name=$(this).find('div.description>p.name>a').text()
//             price=$(this).find('div.description>ul>li>span[style*="color:#333333"]').text().replace("원","")
//             img=$(this).find('div.thumbnail.outline>a>div.add_thumb>img').attr('src')
//             url=$(this).find('div.thumbnail.outline>a').attr('href')
//             name=name.substr(6,name.length)
//             img='http:'+img
//             url='http://dparks.co.kr'+url
//             json.push({name:name, price:price, img:img, url:url})
//         })
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//소다케이스
// var func_sodacase= new Promise(function (resolve, reject){
//     request('http://sodacase.co.kr/product/list.html?cate_no=313',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.prdList.grid4>li').each(function(index, ele){
//             name=$(this).find('div.description>p.name>a>span[style*="color:#555555"]').text()
//             price=$(this).find('div.description>ul>li>span[style*="color:#333333"]').text().replace("원","")
//             img=$(this).find('div.thumbnail>a>img').attr('src')
//             url=$(this).find('div.thumbnail>a').attr('href')
//             img='http:'+img
//             url='http://sodacase.co.kr'+url
//             json.push({name:name, price:price, img:img, url:url})
//         })
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//프롬달
// var func_sfrom_dal= new Promise(function (resolve, reject){
//     request('http://from-dal.com/goods/goods_list.php?cateCd=009019',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('div.goods_list>div.goods_list_cont>div>ul>li>div.item_cont').each(function(index, ele){
//             name=$(this).find('div.item_info_cont>div.item_tit_box>a>strong.item_name').text()
//             price=$(this).find('div.item_money_box>strong.item_price>span').text().replace("원","").trim()
//             img=$(this).find('div>a>img').attr('src')
//             url=$(this).find('div>a').attr('href')
//             url=url.substr(2,url.length)
//             img='http://from-dal.com'+img
//             url='http://from-dal.com'+url
//             json.push({name:name, price:price, img:img, url:url})
//         })
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )


//통큰준구씨
// var func_jungucase= new Promise(function (resolve, reject){
//     request('http://jungucase.com/product/list.html?cate_no=88',function(error, response, body){
//         if(error) throw error
//         $= cheerio.load(body);
    
//         let json=[], name, price, img, url
//         $('ul.romi_prdList.itemline4>li>div.box').each(function(index, ele){
//             name=$(this).find('p.name>a>span').text()
//             price=$(this).find('ul>li>span[style*="color:#000000"]').text().replace("원","").trim()
//             img=$(this).find('a>img').attr('src')
//             url=$(this).find('a').attr('href')
//             img='http:'+img
//             url='http://jungucase.com'+url
//             json.push({name:name, price:price, img:img, url:url})
//         })
        
//         console.log(json)
//         resolve(json)
//     })
// }
// )
