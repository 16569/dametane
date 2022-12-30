import * as React from "react"

export default function AccelGooglePlay() {
    let html: string = "<a href='https://play.google.com/store/apps/details?id=com.dametane.accelsv&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png' style='margin-top:5px;margin-right:15px;' width='130' /></a>"
    return (
        <React.Fragment>
         <div dangerouslySetInnerHTML={{__html: html}}></div>
        </React.Fragment>
    )
}