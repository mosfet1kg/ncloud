# Storage

## `uploadFile` 
Uploads local file to ncloud container.  

**Remark**  
This package doesn't support the function for creating container.  Yon can create a container on ncloud web console.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| localFile | `string`  | **required** | File path of the local file |         
| container | `string`  | **required** | Container name where the file will be uploaded |
| key       | `string`  | **required** | Name of file to be uploaded |

### Example
```javascript
const params = {
  localFile: path.join(__dirname, '../example/storage/testfile.gif'),
  container: 'helloworld',
  key: 'testfile.gif'
};

const uploader = client.storage.uploadFile(params);

uploader.on('progress', function (progress) {
  console.log( progress );
  // progress exampe=>
  // { etag: '5527074453435704246',
  //  progressAmount: 555745280,  // bytes
  //  progressTotal: 0.16069388337116636 // percentage } 
});

uploader.on('error', function (err) {
  console.log( err );
});

uploader.on('end', function () {
  console.log('end');
})
```  

Returns Event Emitter with these properties:
- etag
- progressAmount
- progressTotal  

And these events
- 'error' (err)
- 'end' () - emitted when the file is uploaded successfully.
- 'progress' ({ etag, progressAmount, progressTotal}) - emitted when `etag`, 
`progressAmount`, `progressTotal` properties change.    
  
---

## `downloadFile`

Downloads a file from ncloud container.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| localFile | `string`  | **required** | Local file path to be downloaded |         
| container | `string`  | **required** | Container name where the file is stored. |
| key       | `string`  | **required** | Name of file to be downloaded |

### Example
```javascript
const params = {
  localFile: path.join(__dirname, './testfile.gif'),
  container: 'helloworld',
  key: 'testfile.gif'
};

const downloader = client.storage.downloadFile( params );

downloader.on('progress', function (progress) {
  console.log( progress );
  //{ progressAmount: 4850115, progressTotal: 0.9531242968418533 }
});

downloader.on('error', function (err) {
  console.log( err );
});

downloader.on('end', function () {
  console.log( 'end');
})
```

---

## `deleteFile`
Deletes the file in ncloud container.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | file name in container |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: 'testfile.gif'
};

client.storage.deleteFile( params, function (err, res) {
  if ( err ) {
    return console.log( err.message );
  }
})
```

---

## `findFiles`
Returns a list of files in a container.

### Arguments  
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | Either folder name or file name |
| listMaker | `string`  | optional     | The file name that will be beginning of result. This parameter is used for pagination. |
| listSize  | `string`  | optional     | Maximum length of result. It can be up to 999.  This parameter is used for pagination. <br/> **Default:** 999 |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: '/',
};

client.storage.findFiles( params, function (err, res) {
  if (err) {
    return console.log( err ); 
  }
  
  console.log( res );
  // Result example =>
  // { Contents: 
  //    [ { name: 'kickass2.mkv',
  //    'resource-type': '4',
  //     etag: '114352073644237862',
  //     'resource-status': '2',
  //    'last-modified': '1509993830134',
  //     'content-type': 'video/x-matroska',
  //     size: '3458409669' },
  //    { name: 'test',
  //     'resource-type': '2',
  //     etag: '3362642876774536151',
  //     'resource-status': '2',
  //     'last-modified': '1510471954592',
  //     'content-type': {},
  //     size: '0' } ],
  //    NextMarker: null } // NextMaker is null if there is no next page.
})
```

Returns with these properties.
- resource-type
- resource-status

resource-type
- 1: container 
- 2: folder
- 3: file 
- 4: large file 
- 5: a part of large file

resource-status
- 1: Being creating 
- 2: Normal
- 3: Being deleting
- 4: Completing large file upload completion

---

## `createFolder`
Creates a folder in container.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | Name of folder to be created. |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: 'testFolder'
};

client.storage.createFolder( params, function (err, res) {
  if ( err ) {
    return console.log( err );
  }
})
```

---

## `deleteFolder`
Deletes a folder in a container

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | Name of folder to be deleted. |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: 'testFolder'
};

client.storage.deleteFolder( params, function (err, res) {
  if ( err ) {
    return console.log( err );
  }
})
```

---

## `findAcl`
Returns acl of a container, a folder or a file.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | Takes a container, a folder or a file |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: '/'
};

client.storage.findAcl( params, function (err, res) {
  if ( err ) {
    return console.log(err);
  }
  
  console.log( res );
  // result example =>
  // { acl: { 'access-control': { grantee: '*', operations: 'r', policy: 'ALLOW' } } }
})
```


---

## `putAcl`
Set access permissions for files or containers.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | Takes a container, a folder or a file |
| operations | `string` | **required** | See below reference |
| policy     | `string` | **required** | Either 'ALLOW' or 'DENY' |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: '/',  // set permission for container
  operations:'rq',
  policy: 'ALLOW'
};

client.storage.putAcl( params, function (err, res) {
  if ( err ) {
    return console.log(err);
  } 
})
```

operations  
- r: read
- w: write
- l: lookup
- q: rights to lookup metadata, ACL 
- e: rights to modify metadata, ACL 

---

## `makeAclPristine`
Deletes all acl settings.

### Arguments
| Name      | Type      | Required     | Description                |
|-----------|-----------|--------------|----------------------------|
| container | `string`  | **required** | Container name |
| key       | `string`  | **required** | Takes a container, a folder or a file |

### Example
```javascript
const params = {
  container: 'helloworld',
  key: '/'
};

client.storage.makeAclPristine( params, function (err, res) {
  if ( err ) {
    return console.log(err);
  }
})
```