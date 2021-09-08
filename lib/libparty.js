// LibParty 1.0 for SearchParty 1.0
export async function _SearchScraper(server,website){
  if(searchPartyOpen===true){
  if(website=='party:/index'){
    let fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", server+'/private/index.js') // Read Server, then call the imported function (which should be the website name but replace . with _)
        let _funccall=website.replace(".", "_");
        bulletguard('"use strict";SSserverIndex();'); // Execute Website Call
  }
  else{
        let fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", server+'/'+website) // Read Server, then call the imported function (which should be the website name but replace . with _)
        let _funccall=website.replace(".", "_");
        bulletguard('"use strict";'+_funccall+'();'); // Execute Website Call
  }
 }
} // Searches a Server for Website (Uses a stupid JS Based Call System, but I will see if SearchParty 2.0 has better speed)
export {_SearchScraper}
