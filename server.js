const http = require('http');
const url = require('url')
const path = require('path');
const fs = require('fs')

const uploadfile = path.join( __dirname , 'upload')

const server = http.createServer((req,res)=>{
    const textifyData = url.parse(req.url , true ) // url contains  pathname: '/uploads',path: '/uploads',href: '/uploads'
    if(req.method == 'POST' && textifyData.pathname== "/uploads"){
        let boundary = req.headers['content-type'].split('boundary=')
        let storeData = []
        req.on('data',(chunk)=>{
            storeData.push(chunk)
        })
        req.on('end',()=>{
            let Bufconvert = Buffer.concat(storeData).toString('binary')
            let parts = Bufconvert.split(boundary[1])
            for (const part of parts) {
                let FileDataStart = part.indexOf('\r\n\r\n')
                if(FileDataStart !== -1){
                    let Fileheader = part.substring(0,FileDataStart)
                    let FileRawData = part.substring(FileDataStart + 4)
                    let filenameMatch = Fileheader.match(/filename="(.+?)"/);
                    if(filenameMatch){
                        const filePath = path.join(uploadfile ,filenameMatch[1])
                        fs.writeFileSync(filePath,FileRawData , 'binary')
                    }
                }
            }
        })
    }
;})

server.listen(3000,()=>{        
    console.log("server is running");
})
