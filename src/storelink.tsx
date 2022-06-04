import * as React from 'react';

export default function AppStore() {
    let html: string = "<a href=\"https://apps.apple.com/jp/app/effortvaluetool/id1609571317?itsct=apps_box_badge&amp;itscg=30200\" style=\"display: inline-block; overflow: hidden; border-radius: 13px; width: 120px; height: 83px;\"><img src=\"https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1654300800&h=d379166e3261cffc9318e42725545164\" alt=\"Download on the App Store\" style=\"border-radius: 13px; width: 120px; height: 83px;\"></a>"
    return (
        <React.Fragment>
         <div dangerouslySetInnerHTML={{__html: html}}></div>
        </React.Fragment>
    )
}