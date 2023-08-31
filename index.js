const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/check", (req, res) => {
  try {
    let payload = {
      orderId: req.body.id || null,
      sellerId: "TOKEN",
      // tempOrderId: "EMPTY STRING",
      companyId: "DISCUSS",
      bundleName: "EMPTY STRING",
      // Schema Altering Points
      orderConfirmed: req.body.confirmed,
      currency: req.body.currency,
      subTotalPrice: req.body.current_subtotal_price,
      tax: req.body.current_total_tax,
      taxObject: req.body.tax_lines,
      totalPrice: req.body.current_total_price,
      orderStatusUrl: req.body.order_status_url,
      totalOrderWeight: req.body.total_weight,
      products: [
        {
          productId: req.body.line_items[0].product_id,
          productName: req.body.line_items[0].name,
          description: req.body.line_items[0].title,
          category: "NO DATA ON INCOMING OBJ",
          tags: ["NO DATA ON INCOMING OBJ"],
          price: req.body.line_items[0].price,
          currency: req.body.currency,
          discountAmount: req.body.line_items[0].total_discount,
          sale_price: "539.99", // Need To Ask Akshay
          gst: "No DATA IN INCOMING OBJ",
          stock: req.body.line_items[0].quantity,
          // "dimensions": {
          //   "length": "40",  // API CHECK PRODUCT DIMESION
          //   "breadth": "30",
          //   "height": "40", NO DATA IN INCOMING OBJ
          //   "unit": "cm"
          // },
          weight: {
            deadWeight: req.body.line_items[0].grams / 1000,
            deadWeightUnit: "kg",
            volumetricWeight: "NO DATA IN INCOMING OBJ",
            volumetricWeightUnit: "kg",
            // catalogueWeight: {
            //   "from": 1,
            //   "to": 2,
            //   "unit": "kg"
            // }
          },
          available: req.body.line_items[0].product_exists,
          attributes: {
            color: req.body.line_items[0].variant_title && req.body.line_items[0].variant_title.split("/")[1] || null,
            size: req.body.line_items[0].variant_title && req.body.line_items[0].variant_title.split("/")[0] || null,
            brand: null,
          },
          // "features": [
          //   "6.5-inch AMOLED display",
          //   "Quad-camera system",
          //   "128GB storage"
          // ],
          // "images": [
          //   {
          //     "url": "",
          //     "alt": ""
          //   }
          // ],
          // "ratings": {
          //   "average": 4.7,
          //   "count": 102
          // },
          // "reviews": [
          //   {
          //     "username": "user123",
          //     "rating": 5,
          //     "comment": "Great product! Highly recommended."
          //   },
          //   {
          //     "username": "user456",
          //     "rating": 4,
          //     "comment": "Good quality, fast shipping."
          //   }
          // ]
        },
      ],
      // "pickupLocation": {
      //   "flatNo": "202",
      //   "address": "room no 202, gaurish CHS Ashok nagar kandivali east mumbai 400101",
      //   "sector": "Ashok nagar",
      //   "landmark": "gaurish CHS",
      //   "pincode": "400101",
      //   "city": "mumbai",
      //   "state": "maharashtra",     NEED TO CHECK ANOTHER API
      //   "country": "india",
      //   "addressType": "warehouse",
      //   "contact": {
      //     "name": "Keval Panchal",
      //     "mobileNo": "7718882626",
      //     "alternateMobileNo": "",
      //     "emailId": "",
      //     "type": "warehouse associate"
      //   },
      //   "customBranding": {
      //     "name": "",
      //     "logo": "",
      //     "address": "",
      //     "contact": {
      //       "name": "",
      //       "mobileNo": ""
      //     }
      //   },
      //   "pickupDate": 1693549800
      // },
      type: "B2C",
      // "packageType": {
      //   "packageId": "",
      //   "weight": "",
      //   "name": "",
      //   "dimension": {   // No DATA IN INCOMING OBJ
      //     "length": "",
      //     "breadth": "",
      //     "height": ""
      //   },
      //   "image": ""
      // },
      // "insurance": {
      //   "status": "",
      //   "collectableAmount": "", // ASK GAURAV
      //   "totalAmount": ""
      // },
      // "orderFlow": {
      //   "pickupLocation": true,
      //   "deliveryLocation": true,  // ONLY FOR THOSE PRODUST THAT PASS FROM TEMP TO PERM
      //   "products": true,
      //   "service": true,
      //   "payment": true
      // },
      payment: {
        gatewayName: req.body.payment_gateway_names.join(" "),
        // "status": true,
        // "amount": 132,
        // "time": 1693291874533
      },
      // "boxId": "",

      // createdBy: 1015,
      // "createdAt": 1693288897309,
      // "updatedBy": 1015,
      // "updatedAt": 1693291865504,
      // "isActive": true,
      // "isDeleted": false,

      deliveryLocation: {
        recipientType: consumer,
        flatNo: req.body.shipping_address.address1,
        address: "",
        sector: "",
        landmark: "",
        pincode: req.body.shipping_address.zip,
        city: req.body.shipping_address.city,
        state: req.body.shipping_address.province,
        country: req.body.shipping_address.country_code,
        gstNumber: "",
        addressType: "",
        contact: {
          name: `${req.body.customer.first_name} ${req.body.customer.last_name}`,
          mobileNo: req.body.customer.phone,
          alternateMobileNo: "",
          emailId: req.body.customer.email,
        },
        // "service": {
        //   "mode": "SURFACE",
        //   "companyServiceId": "a3d29a34", // NO DATA AVAILABLE IN INCOMING OBJ
        //   "companyServiceName": "STANDARD 0.5",
        //   "baseWeight": 0.5,
        //   "price": 132,
        //   "partnerServiceId": "10a5fd96",
        //   "partnerServiceName": "DP MODE"
        // },
        codInfo: {
          isCOD: req.body.payment_gateway_names && req.body.payment_gateway_names.split(" ").includes("COD")
            ? true
            : false,
          codAmount: req.body.payment_gateway_names && 
            req.body.payment_gateway_names.split(" ").includes("COD") === true
              ? req.body.current_total_price
              : "",
          invoiceValue: req.body.payment_gateway_names && 
            req.body.payment_gateway_names.split(" ").includes("COD") === true
              ? req.body.current_total_price
              : "",
        },
        tracking: {
          currentStatus: "booked",
        },
      },
    };

    console.log("payload: ", payload);

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
