const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/check", (req, res) => {
  try {

    // console.log("Req.body: ", req.body);

    let payload = {
      orderId: req.body.id || null,
      sellerId: "TOKEN",
      companyId: "9b6c92a4-9584-4cf4-a624-58d6bd245a26",
      confirmationNumber: req.body.confirmation_number,
      clientDetails: {
        acceptLanguage: req.body.client_details && req.body.client_details.accept_language,
        browserHeight: req.body.client_details && req.body.client_details.browser_height,
        browserIp:req.body.client_details && req.body.client_details.browser_ip,
        browserWidth:req.body.client_details && req.body.client_details.browser_width,
        sessionHash: req.body.client_details && req.body.client_details.session_hash,
        userAgent:req.body.client_details &&  req.body.client_details.user_agent,
      },
      browserIp: req.body.browser_ip,
      orderConfirmed: req.body.confirmed,
      currency: req.body.currency,
      subTotalPrice: req.body.current_subtotal_price,
      tax: req.body.current_total_tax,

      taxObject: [
        {
          price: req.body.tax_lines[0] && req.body.tax_lines[0].price,
          rate: req.body.tax_lines[0] &&  req.body.tax_lines[0].rate,
          title: req.body.tax_lines[0] &&  req.body.tax_lines[0].title,
          priceSet:req.body.tax_lines[0] &&  req.body.tax_lines[0].price_set,
          channelLiable:  req.body.tax_lines[0] && req.body.tax_lines[0].channel_liable,
        },
      ],

      totalPrice: req.body.current_total_price,
      orderStatusUrl: req.body.order_status_url,
      totalOrderWeight: req.body.total_order_weight,
      discountCodes: req.body.discount_codes,
      financialStatus: req.body.financial_status,
      locationId: req.body.location_id,
      orderNumber: req.body.order_number,
      sourceName: req.body.source_name,
      sourceUrl: req.body.source_url,
      totalTipReceived: req.body.total_tip_received,
      userId: req.body.user_id,
      payment: {
        gatewayName:
          req.body.payment_gateway_names &&
          req.body.payment_gateway_names.join(" "),
      },
      billingAddress: {
        firstName: req.body.billing_address.first_name,
        lastName: req.body.billing_address.last_name,
        address1: req.body.billing_address.address1,
        phone: req.body.billing_address.phone,
        city: req.body.billing_address.city,
        pincode: req.body.billing_address.zip,
        state: req.body.billing_address.province,
        country: req.body.billing_address.country,
        address2: req.body.billing_address.address2,
        company: req.body.billing_address.company,
        latitude: req.body.billing_address.latitude,
        longitude: req.body.billing_address.longitude,
        name: req.body.billing_address.name,
        countryCode: req.body.billing_address.country_code,
        stateCode: req.body.billing_address.province_code,
      },
      customer: {
        id: req.body.customer.id,
        email: req.body.customer.email,
        acceptedMarketing: req.body.customer.accepted_marketing,
        firstName: req.body.customer.first_name,
        lastName: req.body.customer.last_name,
        state: req.body.customer.state,
        note: req.body.customer.note,
        verifiedEmail: req.body.customer.verified_email,
        taxExempt: req.body.customer.tax_emempt,
        phone: req.body.customer.phone,
        emailMarketingConsent: req.body.customer.email_marketing_consent,
        tags: req.body.customer.tags,
        smsMarketingConsent: req.body.customer.sms_marketing_consent,
        currency: req.body.customer.currency,
        defaultAddress: {
          id: req.body.customer.default_address.id,
          customerId: req.body.customer.default_address.customer_id,
          default: req.body.customer.default_address.default,
          firstName: req.body.customer.default_address.first_name,
          lastName: req.body.customer.default_address.last_name,
          address1: req.body.customer.default_address.address1,
          phone: req.body.customer.default_address.phone,
          city: req.body.customer.default_address.city,
          pincode: req.body.customer.default_address.zip,
          state: req.body.customer.default_address.province,
          country: req.body.customer.default_address.country,
          address2: req.body.customer.default_address.address2,
          company: req.body.customer.default_address.company,
          latitude: req.body.customer.default_address.latitude,
          longitude: req.body.customer.default_address.longitude,
          name: req.body.customer.default_address.name,
          countryCode: req.body.customer.default_address.country_code,
          stateCode: req.body.customer.default_address.province_code,
        },
      },
      products: {
        id: req.body.line_items[0].id,
        productId: req.body.line_items[0].product_id,
        productName: req.body.line_items[0].name,
        title: req.body.line_items[0].title,
        price: req.body.line_items[0].price,
        currency: req.body.line_items[0].currency,
        discountAmount: req.body.line_items[0].discount_amount,
        quantity: req.body.line_items[0].quantity,
        requireShipping: req.body.line_items[0].requires_shipping,
        sku: req.body.line_items[0].sku,
        grams: req.body.line_items[0].grams,
        priceSet: req.body.line_items[0].price_set,
        productExists: req.body.line_items[0].product_exists,
        taxable: req.body.line_items[0].taxable,
        totalDiscount: req.body.line_items[0].total_discount,
        totalDiscountSet: req.body.line_items[0].total_discount_set,
        variantId: req.body.line_items[0].variant_id,
        variantInventoryManagement:
          req.body.line_items[0].variant_inventory_management,
        variantTitle: req.body.line_items[0].variant_title,
        vendor: req.body.line_items[0].vendor,
      },
      shippingAddress: {
        firstName: req.body.shipping_address.first_name,
        lastName: req.body.shipping_address.last_name,
        address1: req.body.shipping_address.address1,
        phone: req.body.shipping_address.phone,
        city: req.body.shipping_address.city,
        pincode: req.body.shipping_address.zip,
        state: req.body.shipping_address.province,
        country: req.body.shipping_address.country,
        address2: req.body.shipping_address.address2,
        company: req.body.shipping_address.company,
        latitude: req.body.shipping_address.latitude,
        longitude: req.body.shipping_address.longitude,
        name: req.body.shipping_address.name,
        countryCode: req.body.shipping_address.country_code,
        stateCode: req.body.shipping_address.province_code,
      },
    };

    let products = req.body.line_items.map((item) => {
      return ({
        id: item.id,
        productId: item.product_id,
        productName: item.name,
        title: item.title,
        price: item.price,
        currency: item.currency,
        discountAmount: item.discount_amount,
        quantity: item.quantity,
        requireShipping: item.requires_shipping,
        sku: item.sku,
        grams: item.grams,
        priceSet: item.price_set,
        productExists: item.product_exists,
        taxable: item.taxable,
        totalDiscount: item.total_discount,
        totalDiscountSet: item.total_discount_set,
        variantId: item.variant_id,
        variantInventoryManagement:
          item.variant_inventory_management,
        variantTitle: item.variant_title,
        vendor: item.vendor,
      })
    });


    // let payload = {

    //   orderId: req.body.id || null,
    //   sellerId: "TOKEN",
    //   // tempOrderId: "EMPTY STRING",
    //   companyId: "DISCUSS",
    //   bundleName: "EMPTY STRING",
    //   // Schema Altering Points
    //   orderConfirmed: req.body.confirmed,
    //   currency: req.body.currency,
    //   subTotalPrice: req.body.current_subtotal_price,
    //   tax: req.body.current_total_tax,
    //   taxObject: req.body.tax_lines,
    //   totalPrice: req.body.current_total_price,
    //   orderStatusUrl: req.body.order_status_url,
    //   totalOrderWeight: req.body.total_weight,
    //   products: [
    //     {
    //       productId: req.body.line_items[0].product_id,
    //       productName: req.body.line_items[0].name,
    //       description: req.body.line_items[0].title,
    //       category: "NO DATA ON INCOMING OBJ",
    //       tags: ["NO DATA ON INCOMING OBJ"],
    //       price: req.body.line_items[0].price,
    //       currency: req.body.currency,
    //       discountAmount: req.body.line_items[0].total_discount,
    //       sale_price: "539.99", // Need To Ask Akshay
    //       gst: "No DATA IN INCOMING OBJ",
    //       stock: req.body.line_items[0].quantity,
    //       // "dimensions": {
    //       //   "length": "40",  // API CHECK PRODUCT DIMESION
    //       //   "breadth": "30",
    //       //   "height": "40", NO DATA IN INCOMING OBJ
    //       //   "unit": "cm"
    //       // },
    //       weight: {
    //         deadWeight: req.body.line_items[0].grams / 1000,
    //         deadWeightUnit: "kg",
    //         volumetricWeight: "NO DATA IN INCOMING OBJ",
    //         volumetricWeightUnit: "kg",
    //         // catalogueWeight: {
    //         //   "from": 1,
    //         //   "to": 2,
    //         //   "unit": "kg"
    //         // }
    //       },
    //       available: req.body.line_items[0].product_exists,
    //       attributes: {
    //         color: req.body.line_items[0].variant_title && req.body.line_items[0].variant_title.join("/")[1] || null,
    //         size: req.body.line_items[0].variant_title && req.body.line_items[0].variant_title.join("/")[0] || null,
    //         brand: null,
    //       },
    //       // "features": [
    //       //   "6.5-inch AMOLED display",
    //       //   "Quad-camera system",
    //       //   "128GB storage"
    //       // ],
    //       // "images": [
    //       //   {
    //       //     "url": "",
    //       //     "alt": ""
    //       //   }
    //       // ],
    //       // "ratings": {
    //       //   "average": 4.7,
    //       //   "count": 102
    //       // },
    //       // "reviews": [
    //       //   {
    //       //     "username": "user123",
    //       //     "rating": 5,
    //       //     "comment": "Great product! Highly recommended."
    //       //   },
    //       //   {
    //       //     "username": "user456",
    //       //     "rating": 4,
    //       //     "comment": "Good quality, fast shipping."
    //       //   }
    //       // ]
    //     },
    //   ],
    //   // "pickupLocation": {
    //   //   "flatNo": "202",
    //   //   "address": "room no 202, gaurish CHS Ashok nagar kandivali east mumbai 400101",
    //   //   "sector": "Ashok nagar",
    //   //   "landmark": "gaurish CHS",
    //   //   "pincode": "400101",
    //   //   "city": "mumbai",
    //   //   "state": "maharashtra",     NEED TO CHECK ANOTHER API
    //   //   "country": "india",
    //   //   "addressType": "warehouse",
    //   //   "contact": {
    //   //     "name": "Keval Panchal",
    //   //     "mobileNo": "7718882626",
    //   //     "alternateMobileNo": "",
    //   //     "emailId": "",
    //   //     "type": "warehouse associate"
    //   //   },
    //   //   "customBranding": {
    //   //     "name": "",
    //   //     "logo": "",
    //   //     "address": "",
    //   //     "contact": {
    //   //       "name": "",
    //   //       "mobileNo": ""
    //   //     }
    //   //   },
    //   //   "pickupDate": 1693549800
    //   // },
    //   type: "B2C",
    //   // "packageType": {
    //   //   "packageId": "",
    //   //   "weight": "",
    //   //   "name": "",
    //   //   "dimension": {   // No DATA IN INCOMING OBJ
    //   //     "length": "",
    //   //     "breadth": "",
    //   //     "height": ""
    //   //   },
    //   //   "image": ""
    //   // },
    //   // "insurance": {
    //   //   "status": "",
    //   //   "collectableAmount": "", // ASK GAURAV
    //   //   "totalAmount": ""
    //   // },
    //   // "orderFlow": {
    //   //   "pickupLocation": true,
    //   //   "deliveryLocation": true,  // ONLY FOR THOSE PRODUST THAT PASS FROM TEMP TO PERM
    //   //   "products": true,
    //   //   "service": true,
    //   //   "payment": true
    //   // },
    //   payment: {
    //     gatewayName: req.body.payment_gateway_names.join(" "),
    //     // "status": true,
    //     // "amount": 132,
    //     // "time": 1693291874533
    //   },
    //   // "boxId": "",

    //   // createdBy: 1015,
    //   // "createdAt": 1693288897309,
    //   // "updatedBy": 1015,
    //   // "updatedAt": 1693291865504,
    //   // "isActive": true,
    //   // "isDeleted": false,

    //   deliveryLocation: {
    //     recipientType: 'consumer',
    //     flatNo: req.body.shipping_address.address1,
    //     address: "",
    //     sector: "",
    //     landmark: "",
    //     pincode: req.body.shipping_address.zip,
    //     city: req.body.shipping_address.city,
    //     state: req.body.shipping_address.province,
    //     country: req.body.shipping_address.country_code,
    //     gstNumber: "",
    //     addressType: "",
    //     contact: {
    //       name: `${req.body.customer.first_name} ${req.body.customer.last_name}`,
    //       mobileNo: req.body.customer.phone,
    //       alternateMobileNo: "",
    //       emailId: req.body.customer.email,
    //     },
    //     // "service": {
    //     //   "mode": "SURFACE",
    //     //   "companyServiceId": "a3d29a34", // NO DATA AVAILABLE IN INCOMING OBJ
    //     //   "companyServiceName": "STANDARD 0.5",
    //     //   "baseWeight": 0.5,
    //     //   "price": 132,
    //     //   "partnerServiceId": "10a5fd96",
    //     //   "partnerServiceName": "DP MODE"
    //     // },
    //     codInfo: {
    //       isCOD: req.body.payment_gateway_names.length > 0 && req.body.payment_gateway_names.join(" ").includes("COD")
    //         ? true
    //         : false,
    //       codAmount: req.body.payment_gateway_names && 
    //         req.body.payment_gateway_names.join(" ").includes("COD") === true
    //           ? req.body.current_total_price
    //           : "",
    //       invoiceValue: req.body.payment_gateway_names && 
    //         req.body.payment_gateway_names.join(" ").includes("COD") === true
    //           ? req.body.current_total_price
    //           : "",
    //     },
    //     tracking: {
    //       currentStatus: "booked",
    //     },
    //   },
    // };

    console.log("Products: ", products);;

    res.status(200).send({
      success: true,
      data: req.body,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

app.listen(8000, () => console.log("Connected To Port 8000"));
