import { defineStore } from "pinia";

export const usePorts = defineStore("ports", {
  state: () => ({
    port: "21 / TCP",
    ports: [
      {
        id: 0,
        portName: "21 / TCP",
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
        kexAlgorithms: [
          "curve25519-sha256",
          "curve25519-sha256@libssh.org",
          "diffie-hellman-group-exchange-sha256",
          "diffie-hellman-group18-sha512",
          "diffie-hellman-group16-sha512",
          "diffie-hellman-group14-sha256",
        ],
        keyAlgorithms: [
          "	ssh-ed25519",
          "ecdsa-sha2-nistp256",
          "rsa-sha2-512",
          "rsa-sha2-256",
          "ssh-rsa",
        ],
        encryptionAlgorithms: [
          "chacha20-poly1305@openssh.com",
          "aes256-gcm@openssh.com",
          "aes128-gcm@openssh.com",
          "aes256-ctr",
          "aes192-ctr",
          "aes128-ctr",
        ],
        compressionAlgorithms: ["none", "zlib@openssh.com"],
      },
      {
        id: 1,
        portName: "20 / TCP",
        portDesc:
          "Параметр Родинга-Гамильтона позволяет исключить из рассмотрения уходящий центр подвеса, основываясь на ограничениях, наложенных на систему. Ротор требует большего внимания к анализу ошибок, которые даёт колебательный момент. Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        dangers: [
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
        ],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 4,
            code: false,
          },
        ],
        kexAlgorithms: ["curve25519-sha256"],
        keyAlgorithms: ["	ssh-ed25519", "ecdsa-sha2-nistp256", "rsa-sha2-512"],
        encryptionAlgorithms: ["chacha20-poly1305@openssh.com"],
        compressionAlgorithms: ["none", "zlib@openssh.com"],
      },
      {
        id: 2,
        portName: "22 / TCP",
        portDesc:
          "Ротор требует большего внимания к анализу ошибок, которые даёт колебательный момент. Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        dangers: [
          {
            name: "CVE-2021-42328",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 2,
            code: false,
          },
        ],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 4,
            code: false,
          },
        ],
        kexAlgorithms: ["curve25519-sha256"],
        keyAlgorithms: ["	ssh-ed25519", "ecdsa-sha2-nistp256", "rsa-sha2-512"],
        encryptionAlgorithms: ["chacha20-poly1305@openssh.com"],
        compressionAlgorithms: ["none", "zlib@openssh.com"],
      },
      {
        id: 3,
        portName: "65500 / TCP",
        portDesc:
          "Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        exploits: [
          {
            name: "CVE-2021-44228",
            url: "https://geoprivacy.com/warning.html",
          },
        ],
        dangers: [],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 4,
            code: false,
          },
        ],
        kexAlgorithms: ["curve25519-sha256"],
        keyAlgorithms: ["	ssh-ed25519", "ecdsa-sha2-nistp256", "rsa-sha2-512"],
        encryptionAlgorithms: ["chacha20-poly1305@openssh.com"],
        compressionAlgorithms: ["none", "zlib@openssh.com"],
      },
      {
        id: 4,
        portName: "23 / TCP",
        portDesc:
          "Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        exploits: [
          {
            name: "CVE-2021-44228",
            url: "https://geoprivacy.com/warning.html",
          },
        ],
        dangers: [
          {
            name: "CVE-2021-42328",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 5,
            code: true,
          },
        ],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 5,
            code: true,
          },
        ],
        kexAlgorithms: ["curve25519-sha256"],
        keyAlgorithms: ["	ssh-ed25519", "ecdsa-sha2-nistp256", "rsa-sha2-512"],
        encryptionAlgorithms: ["chacha20-poly1305@openssh.com"],
        compressionAlgorithms: ["none", "zlib@openssh.com"],
      },
      {
        id: 5,
        portName: "65510 / TCP",
        portDesc:
          "Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        exploits: [
          {
            name: "CVE-2021-44228",
            url: "https://geoprivacy.com/warning.html",
          },
        ],
        dangers: [
          {
            name: "CVE-2021-42328",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 2,
            code: false,
          },
        ],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 1,
            code: true,
          },
        ],
        kexAlgorithms: [
          "curve25519-sha256",
          "curve25519-sha256",
          "curve25519-sha256",
        ],
        keyAlgorithms: ["	ssh-ed25519", "ecdsa-sha2-nistp256", "rsa-sha2-512"],
        encryptionAlgorithms: ["chacha20-poly1305@openssh.com"],
        compressionAlgorithms: ["none", "zlib@openssh.com"],
      },
      {
        id: 6,
        portName: "65520 / TCP",
        portDesc:
          "Под воздействием изменяемого вектора гравитации прецессионная теория гироскопов колебательно вращает газообразный уход гироскопа.",
        exploits: [
          {
            name: "CVE-2012-41228",
            url: "https://geoprivacy.com/warning.html",
          },
        ],
        dangers: [
          {
            name: "CVE-2021-42328",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 4,
            code: false,
          },
        ],
        decision: [
          {
            name: "CVE-2021-44228",
            desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
            rating: 3,
            code: true,
          },
        ],
        kexAlgorithms: [
          "curve25519-sha256",
          "curve25519-sha256",
          "curve25519-sha256",
        ],
        keyAlgorithms: ["	ssh-ed25519", "ecdsa-sha2-nistp256", "rsa-sha2-512"],
        encryptionAlgorithms: ["chacha20-poly1305@openssh.com"],
        compressionAlgorithms: [
          "none",
          "zlib@openssh.com",
          "curve25519-sha256",
          "curve25519-sha256",
        ],
      },
    ],
  }),
  actions: {
    changePort(port) {
      this.port = port;
    },
  },
});
