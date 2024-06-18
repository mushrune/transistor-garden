# Transistor Garden Website

This repository contains the source code for the website [transistor.garden](https://transistor.garden). transistor.garden is a React single page application ( SPA ) with an Azure Functions API hosted on [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/).

## Objectives

transistor.garden ( transistorgarden ) is a web application that fulfills the following functional objectives:
1. tells visitors what transistor garden is and who supports it.
2. shows off a portfolio of completed or in-progress projects.
3. is an effective branding tool, encouraging people to support the business.
4. gives people an effective way to get in contact and stay involved.
5. has something interesting or fun to keep things light hearted.

## Technical Details

### Backend

An Azure Function is used to service data to transistor.garden. The [Azure Functions framework](https://learn.microsoft.com/en-us/azure/azure-functions/) is a noble and scalable solution for web applications and business logic. Azure Functions is directly supported as the preferred backend for Azure Static Web Apps.

Azure Functions has a consumption based pricing model, meaning the cost of operation has a direct relationship with the resources consumed by the application. This is also often referred to as "_serverless_".

For transistor.garden, a C# Azure Function is used.

### Frontend

A transpiled React SPA is sent to the client when a user visits transistor.garden. This package includes a base HTML file, a CSS file and a JavaScript bundle which is used to populate the website elements.

A React SPA was chosen when considering balance between resource usage, performance, and accessibility. Server side rendering ( _SSR_ ), as well as Web Assembly frameworks ( _Blazor, yew_ ) were considered, but React was chosen because of its widespread adoption by the industry and its consistant operation across multiple devices and web browsers.

This project uses [__TypeScript__](https://www.typescriptlang.org/). 

_[create-react-app](https://create-react-app.dev/)_ was used for initial setup.

The React SPA utilizes a few NPM packages to operate, notable ones include:
- __[Tailwind CSS](https://tailwindcss.com/)__: _For in-line CSS utility classes._
- __[MUI](https://mui.com/)__: _For plug-and-play, accessible components._
- __[react-icons](https://react-icons.github.io/react-icons/)__: _For a large and easy to use icon library._
- __[react-hook-form](https://react-hook-form.com/)__: _For strong form validation._
- __[react-router-dom](https://reactrouter.com/en/main)__: _For capable and simple routing._

_For a complete list of packages and dependancies, see package.json in the React SPA source_.

### Cloud Architecture

transistor.garden has a small footprint, and thus has limited cloud service needs. An [Azure Static Web Application](https://learn.microsoft.com/en-us/azure/static-web-apps/) is used to serve the website to clients as well as host the Azure Function backend.
