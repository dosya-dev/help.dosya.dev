// The help directory follows the shipped catalog in apps/web/src/lib/integrations.ts.
// Prefer public instructions; account-connected imports use their existing setup screens.
export const helpProducts = [
  {id:'web',title:'Web app',summary:'Upload, share and manage files',href:'#browse-heading',icon:'browser'},
  {id:'desktop',title:'Desktop app',summary:'Install and set up folder sync',href:'/desktop',icon:'monitor'},
  {id:'extension',title:'Browser extension',summary:'Connect and save from your browser',href:'/extension',icon:'puzzle'},
  {id:'mobile',title:'Mobile app',summary:'Apps and photo backup',href:'/mobile',icon:'phone'},
  {id:'google',title:'Google Drive',summary:'Import files and folders',href:'https://dosya.dev/integration/google-drive/',image:'/integrations/google-color.svg'},
  {id:'onedrive',title:'OneDrive',summary:'Setup in Dosya',href:'https://app.dosya.dev/integrations/onedrive',image:'/integrations/onedrive-color.svg',requiresSignIn:true},
  {id:'dropbox',title:'Dropbox',summary:'Setup in Dosya',href:'https://app.dosya.dev/integrations/dropbox',image:'/integrations/dropbox-color.svg',requiresSignIn:true},
  {id:'zapier',title:'Zapier',summary:'Automate file workflows',href:'/integrations/zapier',image:'/integrations/zapier-color.svg'},
  {id:'n8n',title:'n8n',summary:'Build self-hosted file workflows',href:'https://dosya.dev/integration/n8n/',image:'/integrations/n8n-color.svg'},
  {id:'lightroom',title:'Lightroom Classic',summary:'Publish client galleries from Lightroom',href:'https://dosya.dev/integration/lightroom/',image:'/integrations/lightroom-color.svg'},
  {id:'wordpress',title:'WordPress',summary:'Back up and restore your site',href:'https://dosya.dev/integration/wordpress/',image:'/integrations/wordpress-color.svg'},
  {id:'rclone',title:'rclone',summary:'Copy files with WebDAV',href:'/integrations/rclone',image:'/integrations/rclone-color.svg'},
  {id:'webdav',title:'WebDAV',summary:'Connect a client and transfer files',href:'/integrations/webdav',icon:'drive'},
  {id:'sftp',title:'SFTP',summary:'Connect your transfer client',href:'https://dosya.dev/developer/sftp/',icon:'server'},
  {id:'s3',title:'S3',summary:'Connect S3-compatible tools',href:'https://dosya.dev/developer/s3/',icon:'cloud'},
  {id:'cli',title:'CLI',summary:'Use the command line',href:'https://dosya.dev/developer/cli/',icon:'terminal'},
  {id:'rest-api',title:'REST API',summary:'Build with the API',href:'https://dosya.dev/developer/api/',icon:'code'},
  {id:'webhooks',title:'Webhooks',summary:'Receive workspace events',href:'https://dosya.dev/developer/api/#webhooks',icon:'webhook'},
  {id:'remote-download',title:'Remote download',summary:'Save a file from a URL',href:'https://dosya.dev/remote-downloads/',icon:'download'},
] as const;
