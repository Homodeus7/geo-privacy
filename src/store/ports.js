import { defineStore } from "pinia";

export const usePorts = defineStore("ports", {
  state: () => ({
    ports: [
      {
        portName: "21 TCP",
        portDesc:
          "Гироскопический прибор устойчив. Параметр Родинга-Гамильтона позволяет исключить из рассмотрения уходящий центр подвеса, основываясь на ограничениях, наложенных на систему. Ротор требует большего внимания к анализу ошибок, которые даёт колебательный момент. Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        dangers: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 1,
            code: false,
          },
          {
            name: "CVE-2021-12312",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 4,
            code: true,
          },
          {
            name: "CVE-2321-44112",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 5,
            code: false,
          },
          {
            name: "CVE-2021-42328",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 2,
            code: false,
          },
        ],
        exploits: [
          {
            name: "CVE-2021-44228",
            url: "https://geoprivacy.com/warning.html",
          },
          {
            name: "CVE-2021-44228",
            url: "https://geoprivacy.com/warning.html",
          },
          {
            name: "CVE-2021-44228",
            url: "https://geoprivacy.com/warning.html",
          },
        ],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 4,
            code: false,
          },
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 5,
            code: true,
          },
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 2,
            code: true,
          },
        ],
      },
    ],
  }),
});
