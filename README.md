## Captcha Harvester

Pre harvest captcha token from any website that requires `recaptcha v2`. Everything is ran locally on an express server.

You can certainly use this on top on your existing project that requires the needs of captcha token. Please follow the guide below!

## Instruction

In case you are trying to use this on your existing project. Please follow the guide below.

1. Run in your preferred directory `git clone https://github.com/ericz99/captcha-harvester && cd captcha-harvester`.
2. Next, run yarn install.
3. In the `./config` folder, feel free to add any other site you wish to harvest for.
4. If you are running on MACOS/LINUX, please run `bash add-host.sh`, and feel free to add additional website you wished to harvest in `./add-host.sh` on line 8. If not, then please run `yarn run add-host` if you're on windows.
5. Finally, you can now run `yarn run start` to run the application.
6. Please direct yourself any host domain, eg: captcha.supremenewyork.com:8080.
7. Depending on what site you're trying to harvest, please update the config file, with the site name + site key.

## Sample Config

```js
module.exports = {
  site: {
    name: "supremenewyork.com",
    siteKey: "6LeWwRkUAAAAAOBsau7KpuC9AV-6J8mhw4AjC3Xz",
  },
  serverPort: process.env.PORT || 8080,
};
```

## How to use?

After starting the harvester, it should automatically open the harvester via browser.

You can now start harvesting captcha, and to get the actual response token, there is an endpoint below
to harvest the token. By default, all the token is being stored via array. To persist these token, you must
use a database (each token is only valid for two minutes). But, if you just want the token for one time usage, then just make some modification in the
`/submit` api.

#### /submit

- `POST` : Automatically upload response token

## App Info

### Author

Eric Zhang

### Version

1.0.0

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
