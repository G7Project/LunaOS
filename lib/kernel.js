// LuxKernel 1.0-pre1 (This is a prerelease)
// The Default Kernel for LunaOS
// (C) 2021 Microlemur, Licensed under the LGPL 2.1 License
const luxVersion='1.0-pre1';
let gameModeEnabled=false;
export function bulletguard(exec){
  if(exec.includes('eval')||exec.includes('_Terminal')){
    console.error('[BulletGuard]: Blocked Code Execution Attempt.');
  } else if(exec.includes('_xwin')||exec.inclues('LUX_')||exec.inclues('settings')||exec.inclues('Open')||exec.includes('localStorage')){
    console.error('[BulletGuard]: Blocked Reserved Code Read. (The Function is reserved for OS Only)'); // Notice: This probably won't be tripped but it is worth guarding
  } else if(exec.includes('Function')){
    console.error('[BulletGuard]: Function use is not allowed.')
  } else if(exec.includes('_SearchScraper')){
    console.error('[BulletGuard]: Direct Interactions with SearchParty are not allowed.')
  } else if(exec.includes('permissionsLevel')) {
    console.error('[BulletGuard]: Privilage Escalation is not allowed within this manner. Please use APIs instead.')  
  } else {
    console.log('[BulletGuard]: Allowed execution of '+exec)
    Function(exec);
  }
} // Bullet Guard Sandbox (First sandbox to be used!)
export function gameMode(){
console.log('Starting GameMode...');
gameModeEnabled=true;
console.log('GameMode Ready!');
} // GameMode forces it so the game has most resources.  (Disable background loops from any apps that respect the gameMode protocol)

export {bulletguard, gameMode} // Lux Kernel is basic right now
