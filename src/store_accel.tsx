import * as React from "react"

export default function AccelStore() {
    let html: string = "<a href=\"https://apps.apple.com/us/app/%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%ABsv-%E5%9E%8B%E8%AA%BF%E6%95%B4-%E3%83%80%E3%83%A1%E3%83%BC%E3%82%B8%E5%88%86%E6%9E%90%E3%83%84%E3%83%BC%E3%83%AB/id1661516556?itsct=apps_box_link&itscg=30200\" style=\"display: inline-block; overflow: hidden; border-radius: 13px; width: 120px; height: 60px;\"><img src=\"https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1654300800&h=d379166e3261cffc9318e42725545164\" alt=\"Download on the App Store\" style=\"border-radius: 13px; width: 120px; height: 60px;\"></a>"
    return (
        <React.Fragment>
         <div dangerouslySetInnerHTML={{__html: html}}></div>
        </React.Fragment>
    )
}

