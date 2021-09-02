  const VFS_FHS_DEFINED=['/','/bin','/boot','/dev','/etc','/home','/lib','/media','/mnt','/opt','/sbin','/srv','/tmp','/usr','/var','/root','/proc']; //VFS FHS Compat Layer
  const LUX_SIGN_KEY='AF3290GFM310KFOWE'; // A simple key check (If dumb people who try to attack Lux change this)
  let LUX_TASKS=['lux','xwin','vfs'];
  let LUX_TASKS_NUMBER=3;
  let LUX_SECURITY_FAILED=false; // Should the kernel attempt to lock up?
  let VFS_SERVER='https://vfs.microlemur.net'; // VFS Server defined. Will be wiped on trip and an incident will be reported on the server.
  function LUX_LOCK(){
    VFS_SERVER='';
    LUX_TASKS=['lux','luxlock'];
    LUX_TASKS_NUMBER=2;
    
  } //Lux has been breached, a silent change of behavior which is hard-er to see than a kernel error
    function LUX_SECURITY_CHECK(){
    if(LUX_SIGN_KEY!=='AF3290GFM310KFOWE'){
      LUX_SECURITY_FAILED=true;
      LUX_LOCK();
    } // FAILED!!!
  } // An added Lux task that adds security to the Lux Kernel
    function fetchVFS(){
                fetch(VFS_SERVER+'/serverVFS.js').then(function(response) { 
        if (!response.ok) {
            return false; 
        } 
        return response.blob(); 
    }) .then(function(myBlob) { 
        var objectURL = URL.createObjectURL(myBlob); 
        var sc = document.createElement("script");
        sc.setAttribute("src", objectURL); 
        sc.setAttribute("type", "text/javascript"); 
        document.head.appendChild(sc);
          }
    
        function VFS(){
    var noACC = function() { 
        if (typeof LUX_SECURITY_CHECK === "function" && typeof LUX_LOCK === "function") { 
         let CURRENT_COOKIE=VFS_returnCookie('VFS_KEY');
          if(CURRENT_COOKIE!==LUX_SIGN_KEY+'_CK41PL28'){
            console.error('[VFS]: Your signatures are outdated. Entering Lockdown due to invalid keys...');
            LUX_SECURITY_FAILED=true;
            LUX_LOCK();
          }
         CURRENT_COOKIE=VFS_returnCookie('VFS_KEY_SIGNATURE');
          if(CURRENT_COOKIE!=='MICROLEMUR021'+LUX_SIGN_KEY){
            console.error('[VFS]: Your vendor is invalid. Entering Lockdown due to invalid vendor...');
            LUX_SECURITY_FAILED=true;
            LUX_LOCK();
          }
} else{
     VFS_SERVER='';
    LUX_TASKS=['lux','luxlock'];
    LUX_TASKS_NUMBER=2; 
}
     } // noACC is a check for bad cookies defined and a secondary check to ensure LUX_SECURITY is not disabled
    
    } // VFS Security
