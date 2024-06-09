// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";
import { nanoid } from "nanoid";
let Mailjet = require("node-mailjet");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.order.findMany({
        include: {
          User: true,
        },
      });
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "POST") {
    let { dataNew, total, user,orderDate } = req.body;

    // let data2 = dataNew.map((item) => item.orderId);

    // console.log(orderDate[0], "email");
    const dataResp = await prisma.order.create({
      data: {
        totalAmt: total,
        userId: user.userId,
        orderId: nanoid(),
        OrderItem: {
          create: dataNew,
        },
      },
    });

    const mailjet = Mailjet.apiConnect(
        process.env.MAIL_USERNAME,
        process.env.MAIL_PASSWORD
    );

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "no-reply@maitretech.com", Name: "Zeba E-Com" },
          To: [{ Email: user.email, Name: user?.name }],
          TemplateID: 4659551,
          TemplateLanguage: true,
          Subject: "Order Confirmation",
          Variables: {
            firstname: user.name,
            total_price: total,
            order_date: orderDate[0],
            order_id: nanoid(),
          },
        },
      ],
    });
    request
      .then((result) => {
        // console.log(result.body);
      })
      .catch((err) => {
        console.log(err);
      });

    // const dataResp = await prisma.order.create({
    //   data: {
    //     totalAmt: total,
    //     userId: 17,
    //     OrderItem: data,
    //   },
    // });

    // const token = jwt.sign(
    //   { email: dataResp?.email, name: dataResp?.name },
    //   SECRET_KEY
    // );

    return res.status(201).json(dataResp);
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}
