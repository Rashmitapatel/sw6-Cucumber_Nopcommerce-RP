$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer test",
  "description": "As a User I want to test Desktop product",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5906923100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can arrange products in alphabetical order",
  "description": "",
  "id": "computer-test;user-can-arrange-products-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Computer Menu.",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select Sort By position \"Name: Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 132591200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iMouseHoverOnComputerMenu()"
});
formatter.result({
  "duration": 251109500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOn(String)"
});
formatter.result({
  "duration": 814716400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 182225900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyThatProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 4215282900,
  "status": "passed"
});
formatter.after({
  "duration": 1171421400,
  "status": "passed"
});
formatter.before({
  "duration": 3644045700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can add product to the shopping cart",
  "description": "",
  "id": "computer-test;user-can-add-product-to-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on Computer Menu.",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify that user navigated to build your computer page using \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I Select \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Select RAM \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Check Check-box \"Total Commander [+$5.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Verify the price \"$1,475.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Click on ADD TO CART Button.",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Verify the success Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I close the bar clicking on the cross button.",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I MouseHover on Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Click on GO TO CART button.",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I Change the Qty to \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Verify the Total \"$2,950.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on checkbox of I agree with the terms of service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I Click on CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I Click on CHECKOUT AS GUEST Tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I Fill the all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Click CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on Radio Button “Next Day Air”",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Select Radio Button “Credit Card”",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Payment Continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Select “Master card” From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Fill all the details",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on next Payment Continue",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Verify Payment Method is \"Credit Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I Verify Shipping Method is \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Verify Total is \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Click on CONFIRM",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify the Text head \"Thank you\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I Verify the Success message \"Your order has been successfully processed!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I Click on CONTINUE Button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Verify the text using \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iMouseHoverOnComputerMenu()"
});
formatter.result({
  "duration": 217951600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOn(String)"
});
formatter.result({
  "duration": 584939900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 177196000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCart()"
});
formatter.result({
  "duration": 1127936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 64
    }
  ],
  "location": "ComputerSteps.iVerifyThatUserNavigatedToBuildYourComputerPageUsing(String)"
});
formatter.result({
  "duration": 1049383800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelect(String)"
});
formatter.result({
  "duration": 113548300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 122819500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectHDDRadio(String)"
});
formatter.result({
  "duration": 99208900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectOSRadio(String)"
});
formatter.result({
  "duration": 92334900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iCheckCheckBox(String)"
});
formatter.result({
  "duration": 114337900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iVerifyThePrice(String)"
});
formatter.result({
  "duration": 1083842300,
  "error_message": "java.lang.AssertionError: Price is not matching expected [$1,475.00] but found [$1,470.00]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerSteps.iVerifyThePrice(ComputerSteps.java:71)\r\n\tat ✽.Then I Verify the price \"$1,475.00\"(Computer.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 30
    }
  ],
  "location": "ComputerSteps.iVerifyTheSuccessMessageOnTopGreenBar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnGOTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iChangeTheQtyTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnUpdateShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iVerifyTheTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckboxOfIAgreeWithTheTermsOfService()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCHECKOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCHECKOUTASGUESTTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iFillTheAllMandatoryField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnRadioButtonNextDayAir()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnPaymentContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iSelectMasterCardFromSelectCreditCardDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iFillAllTheDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnNextPaymentContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 28
    }
  ],
  "location": "ComputerSteps.iVerifyPaymentMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iVerifyShippingMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iVerifyTotalIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONFIRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iVerifyTheTextHead(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 30
    }
  ],
  "location": "ComputerSteps.iVerifyTheSuccessMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONTINUEButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iVerifyTheTextUsing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1044006200,
  "status": "passed"
});
formatter.uri("Electronic.feature");
formatter.feature({
  "line": 1,
  "name": "Electronic Test",
  "description": "As a user I want to check electronic page",
  "id": "electronic-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3692931100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be navigated to CellPhone page successfully",
  "description": "",
  "id": "electronic-test;user-should-be-navigated-to-cellphone-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on electronics",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should navigated to cellphone page using \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicSteps.iMouseHoverOnElectronics()"
});
formatter.result({
  "duration": 176849400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 10
    }
  ],
  "location": "ElectronicSteps.iSelect(String)"
});
formatter.result({
  "duration": 675258000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 47
    }
  ],
  "location": "ElectronicSteps.userShouldNavigatedToCellphonePageUsing(String)"
});
formatter.result({
  "duration": 1080734000,
  "status": "passed"
});
formatter.after({
  "duration": 820500800,
  "status": "passed"
});
formatter.before({
  "duration": 3536096400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should able to add and place order successfully",
  "description": "",
  "id": "electronic-test;user-should-able-to-add-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on electronics",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should navigated to cellphone page using \"Cell phones\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on List view",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I Click on product name “Nokia Lumia”",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify the text \"Nokia Lumia 1020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I Verify the price using \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Change quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on “ADD TO CART” tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Verify the success Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I close the bar clicking on the cross button.",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I MouseHover on Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on GO TO CART button.",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I Verify the quantity is \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify the Total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on checkbox of I agree with the terms of service",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I Click on CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I Click on “REGISTER” tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Verify the text \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I Fill the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Click on “REGISTER” Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Verify the message \"Your registration completed\" on registration page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Click on “CONTINUE” tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I Login to website",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on checkbox of I agree with the terms of service",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I Click on CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Fill the rest mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Click on Radio Button “Second Day Air”",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Select Radio Button “Credit Card”",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Payment Continue",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Select “Visa” From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Fill all the details",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on next Payment Continue",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify Payment Method is \"Credit Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I Verify Shipping Method is \"2nd Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Verify Total is \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on CONFIRM",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify the Text head \"Thank you\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I Verify the Success message \"Your order has been successfully processed!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I Click on CONTINUE Button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Verify the text using \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I Click on “Logout” link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I Verify the URL is \"https://demo.nopcommerce.com/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicSteps.iMouseHoverOnElectronics()"
});
formatter.result({
  "duration": 190085200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 10
    }
  ],
  "location": "ElectronicSteps.iSelect(String)"
});
formatter.result({
  "duration": 1104925200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 47
    }
  ],
  "location": "ElectronicSteps.userShouldNavigatedToCellphonePageUsing(String)"
});
formatter.result({
  "duration": 1082245400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnListView()"
});
formatter.result({
  "duration": 96040000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnProductNameNokiaLumia()"
});
formatter.result({
  "duration": 1602417300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/nokia-lumia-1020\"\u003e...\u003c/a\u003e is not clickable at point (926, 601). Other element would receive the click: \u003cdiv class\u003d\"add-info\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3199bc140d9eb7cc2e3943f9ff01ad63, clickElement {id\u003dAFA56E597A1FB7CFB637B1D36910F611_element_66}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\trush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56335}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56335/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (3199bc140d9eb7cc2e3943f9ff01ad63)] -\u003e xpath: //h2[@class\u003d\u0027product-title\u0027]//a[contains(text(),\u0027Nokia Lumia 1020\u0027)]]\nSession ID: 3199bc140d9eb7cc2e3943f9ff01ad63\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.nopcommerce.demo.pages.ElectronicPage.selectPhone(ElectronicPage.java:43)\r\n\tat com.nopcommerce.demo.steps.ElectronicSteps.iClickOnProductNameNokiaLumia(ElectronicSteps.java:35)\r\n\tat ✽.And I Click on product name “Nokia Lumia”(Electronic.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 19
    }
  ],
  "location": "ElectronicSteps.iVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 26
    }
  ],
  "location": "ElectronicSteps.iVerifyThePriceUsing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "ElectronicSteps.iChangeQuantityTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnADDTOCARTTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 30
    }
  ],
  "location": "ComputerSteps.iVerifyTheSuccessMessageOnTopGreenBar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnGOTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ElectronicSteps.iVerifyTheQuantityIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iVerifyTheTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckboxOfIAgreeWithTheTermsOfService()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCHECKOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnREGISTERTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 19
    }
  ],
  "location": "ElectronicSteps.iVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iFillTheMandatoryFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnREGISTERButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 22
    }
  ],
  "location": "ElectronicSteps.iVerifyTheMessageOnRegistrationPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnCONTINUETab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iLoginToWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckboxOfIAgreeWithTheTermsOfService()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCHECKOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iFillTheRestMandatoryField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnRadioButtonSecondDayAir()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnPaymentContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iSelectVisaFromSelectCreditCardDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iFillAllTheDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnNextPaymentContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 28
    }
  ],
  "location": "ComputerSteps.iVerifyPaymentMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iVerifyShippingMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iVerifyTotalIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONFIRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iVerifyTheTextHead(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 30
    }
  ],
  "location": "ComputerSteps.iVerifyTheSuccessMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONTINUEButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iVerifyTheTextUsing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicSteps.iClickOnLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/",
      "offset": 21
    }
  ],
  "location": "ElectronicSteps.iVerifyTheURLIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2177479500,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top menu test",
  "description": "As a User I want to test my Top Menu",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3461324200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As a User I want to navigate at GiftCard page",
  "description": "",
  "id": "top-menu-test;as-a-user-i-want-to-navigate-at-giftcard-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Gift Cards\" from top menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that User is navigated to Gift card page Using \"Gift Cards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmHomePage()"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 923948500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 55
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToGiftCardPageUsing(String)"
});
formatter.result({
  "duration": 1065915300,
  "status": "passed"
});
formatter.after({
  "duration": 777744800,
  "status": "passed"
});
});