"use strict";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  Context } from 'aws-lambda';

const data = {
	color: "red",
	value: "#f00"
}

module.exports.color = (event:APIGatewayProxyEvent|APIGatewayProxyEventV2,context:Context) => {
  // do work here..
  return Promise.resolve({
    statusCode:200,
    body: JSON.stringify(data)
  });
};
