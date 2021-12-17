

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	CISLink
</title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" /><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><meta name="HandheldFriendly" content="true" /><link rel="SHORTCUT ICON" href="../Master/favicon.ico" />
    
    <!--[if lt IE 9]>
        <style type="text/css">
            .popup_wrapper { background: none !important; }
            #popup_x5_wrapper { background: #fff !important; }
        </style>
        <scipt type="text/javascript" src="Scripts/respond.min.js"></script>
    <![endif]-->

    

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter17732104 = new Ya.Metrika({
                        id: 17732104,
                        clickmap: true,
                        accurateTrackBounce: true
                    });
                } catch (e) {
                }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function() { n.parentNode.insertBefore(s, n); };

            s.type = "text/javascript";
            s.async = true;
            s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript>
        <div>
            <img src="//mc.yandex.ru/watch/17732104" style="position: absolute; left: -9999px;" alt=""/>
        </div>
    </noscript>
    <!-- /Yandex.Metrika counter -->

</head>
<body style="height: 100%; width: 100%">

<link href="https://edi-test2.cislink.moscow/Style/edi.css?20211129_1045" rel="Stylesheet" type="text/css"/>
<link href="https://edi-test2.cislink.moscow/Style/common.css?20211129_1045" rel="Stylesheet" type="text/css"/>

<form name="aspnetForm" method="post" action="./SsccCode.aspx" onsubmit="javascript:return WebForm_OnSubmit();" id="aspnetForm" style="height: 100%; width: 100%">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTM0Njg3NzgyMWRkx+HWo5OoQKJlOzA0Jx3CnymjQkY9/IUY6lrure+6CoQ=" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=FFDDvE5CnGw08u5MK1C7pEYU3Ww8bep-KHxYfdO15QkfoujxN4ZKHQ0QK3bsnz7k7Z2CmvzKX4W5upuD4cZgzGuw7iJhk4rgenQkCXzi8JE1&amp;t=636765571264470882" type="text/javascript"></script>


<script src="/WebResource.axd?d=ZIFo1yoMz_pga4FE2GsGr94_-r2J6ROtBNXDvP1GpEBe977-O7qHw_G6MX3fSoQCbZGTT8SMIPM4Yr3Dj8WinNVipheFe9GFTFLEKHiTecs1&amp;t=636765571264470882" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
function WebForm_OnSubmit() {
if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;
return true;
}
//]]>
</script>

<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="EE697466" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAAUNj/J7ObUJz0xicHNxkhrba/gcdBpqGrI1z/CShJkiRk6mvBkrsjyJSh/HwrfAAf2CLpoyjVHqzqFbnxUudE/Aob/NITHbB3NhNZsz+fPRmXCkSVnDkmevgQBGHw2t8kW/hdlrDjDNQhEc4pi05FfP" />
</div>
    
    <table class="main">
        <tr>
            <td>
                <table class="top">
                    <tr>
                        <td class="top"><a href="http://edi.cislink.com/">
                            <img src="/Files/Common/Pics/logos.png" width="239" height="30" alt="" class="pic" /></a></td>
                        <td class="top"></td>
                        <td width="100%"></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr valign="top">
            <td class="main" style="padding: 20px;">
                <table style="text-align: left;">
                    <tr>
                        <td>
                            <a href="/" style="margin: 0px; display: inline-block; float: left"><img src="../Files/Common/GO_Back.png" alt="" /></a>
                        </td>
                    </tr>                    
                    <tr>                        
                        <td colspan="4" style="text-align: center;">                            
                            <h3>Форма для генерации SSCC кодов упаковки на основании GLN кода</h3>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style="padding: 0px 15px 5px 0px;">
                            <strong>GLN состоять из 13 цифр и начинаться с 4.</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0px 15px 5px 0px; width: 10%">GLN</td>
                        <td style="padding: 0px 15px 5px 0px;">
                            <input name="ctl00$phForm$txtGln" type="text" maxlength="13" id="ctl00_phForm_txtGln" class="txt" style="width:200px;" />
                        </td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colspan="3" style="padding: 0px 15px 5px 0px;">
                            <span id="ctl00_phForm_txtGlnValidator" style="color:Red;display:none;">Неверный формат GLN</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style="padding: 0px 15px 5px 0px;">
                            <strong>Необходимо указать диапазон для генерации кодов SSCC. Номер палетты должен быть уникальным в течении года.</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0px 15px 5px 0px; width: 10%">Номер первой палетты</td>
                        <td style="padding: 0px 15px 5px 0px; width: 10%">
                            <input name="ctl00$phForm$txtFirstCode" type="text" maxlength="7" id="ctl00_phForm_txtFirstCode" class="txt" style="width:200px;" />
                        </td>
                        <td style="padding: 0px 15px 5px 0px; width: 10%">Номер последней палетты</td>
                        <td style="padding: 0px 15px 5px 0px; width: 10%">
                            <input name="ctl00$phForm$txtLastCode" type="text" maxlength="7" id="ctl00_phForm_txtLastCode" class="txt" style="width:200px;" />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style="padding: 0px 15px 5px 0px;">
                            <span id="ctl00_phForm_txtFirstCodeValidator" style="color:Red;display:none;">Неверный формат номера палетты</span>
                        </td>
                        <td></td>
                        <td style="padding: 0px 15px 5px 0px;">
                            <span id="ctl00_phForm_txtLastCodeValidator" style="color:Red;display:none;">Неверный формат номера палетты</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4"></td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td style="width: 60%;">
                            <input type="submit" name="ctl00$phForm$btnEnter" value="Сгенерировать SSCC" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$phForm$btnEnter&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_phForm_btnEnter" class="submit" />
                        </td>
                    </tr>
                </table>
                <span id="ctl00_phForm_lblResult" style="font-weight:bold;"></span>
                
            </td>
        </tr>
    </table>


<script type="text/javascript">
//<![CDATA[
var Page_Validators =  new Array(document.getElementById("ctl00_phForm_txtGlnValidator"), document.getElementById("ctl00_phForm_txtFirstCodeValidator"), document.getElementById("ctl00_phForm_txtLastCodeValidator"));
//]]>
</script>

<script type="text/javascript">
//<![CDATA[
var ctl00_phForm_txtGlnValidator = document.all ? document.all["ctl00_phForm_txtGlnValidator"] : document.getElementById("ctl00_phForm_txtGlnValidator");
ctl00_phForm_txtGlnValidator.controltovalidate = "ctl00_phForm_txtGln";
ctl00_phForm_txtGlnValidator.errormessage = "Неверный формат GLN";
ctl00_phForm_txtGlnValidator.display = "Dynamic";
ctl00_phForm_txtGlnValidator.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
ctl00_phForm_txtGlnValidator.validationexpression = "4\\d{12}";
var ctl00_phForm_txtFirstCodeValidator = document.all ? document.all["ctl00_phForm_txtFirstCodeValidator"] : document.getElementById("ctl00_phForm_txtFirstCodeValidator");
ctl00_phForm_txtFirstCodeValidator.controltovalidate = "ctl00_phForm_txtFirstCode";
ctl00_phForm_txtFirstCodeValidator.errormessage = "Неверный формат номера палетты";
ctl00_phForm_txtFirstCodeValidator.display = "Dynamic";
ctl00_phForm_txtFirstCodeValidator.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
ctl00_phForm_txtFirstCodeValidator.validationexpression = "\\d+";
var ctl00_phForm_txtLastCodeValidator = document.all ? document.all["ctl00_phForm_txtLastCodeValidator"] : document.getElementById("ctl00_phForm_txtLastCodeValidator");
ctl00_phForm_txtLastCodeValidator.controltovalidate = "ctl00_phForm_txtLastCode";
ctl00_phForm_txtLastCodeValidator.errormessage = "Неверный формат номера палетты";
ctl00_phForm_txtLastCodeValidator.display = "Dynamic";
ctl00_phForm_txtLastCodeValidator.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
ctl00_phForm_txtLastCodeValidator.validationexpression = "\\d+";
//]]>
</script>


<script type="text/javascript">
//<![CDATA[

var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        //]]>
</script>
</form>
</body>
</html>