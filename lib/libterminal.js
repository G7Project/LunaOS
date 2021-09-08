// LibTerminal for Terminal App (Burn In)
function _TerminalReturnCMD(e){
  if(terminalOpen===true){
      let _keynum;
      let currentCMD='';
      let inj=document.getElementById('TERMINAL_START');
  if(e.which){                 
    _keynum = e.which;
    currentCMD+=_keynum;
    inj.innerHTML+=_keynum;
   }
  }
} // Returns a command typed (Super Cool m8!)
function _TerminalEXEC(cmd){
 if(terminalOpen===true){
  if(cmd=='help'){
    return 'Just add JavaScript ;)';
  }else if(cmd=='squidkid'){
    return 'Marie asked me to tell you to stay fresh!';
  }else{
  bulletguard(cmd);
  }
 }
} // Terminal Execution 
