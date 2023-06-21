
```
- task: publishhtmlreport@1
  inputs:
    htmlType: 'genericHTML'
    htmlPath: '$(Build.SourcesDirectory)/Sample.html'
```

### 2. Specify version of Jmeter in bootstrap.sh, run.sh and Dockerfile. Then run bootstrap.sh 

Running this script will bootstrap your local repo and include essential files needed to build the extension.

### 3. Now increment the build version in task.json and vss-extension.json. 

```
"manifestVersion": 1,
    "id": "PublishHTMLReports",
    "version": "1.1.33",
    "name": "PublishHTMLReports",
    "description": "An extension which lets you publish and visualize HTML reports in Azure Devops as a seperate tab",
    "publisher": "LakshayKaushik",
```
```
 "name": "publishhtmlreport",
    "friendlyName": "publishhtmlreport",
    "description": "This task can be used to publish html reports to azdo. Currently Jmeter HTML reports are being transformed to be consumed into Azdo directly",
    "helpMarkDown": "",
    "category": "Utility",
    "author": "LakshayKaushik",
    "version": {
        "Major": 1,
        "Minor": 1,
        "Patch": 25
```
        

### 4. Generate vsix file.

Run ```publishhtmlreport/tsc``` and ```npm run build```, this will generate vsix file which can be uploaded to the marketplace.

### Note: 
Alternatively, follow the [AutoPackageAndPublish.md](./AutoPackageAndPublish.md) that would automatically bump the version, package the extenstion then publish it.

This project welcomes contributions and suggestions, see more information on contributing in CONTRIBUTING.md


BASADO EN : 
https://github.com/lakshaykaushik/PublishHTMLReport
