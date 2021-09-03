module.exports = {
  Introduction: [
    "getting-started/introduction",
    "getting-started/installation",
    "getting-started/quickstart",
    "getting-started/highlights",
    "getting-started/client_api",
    "getting-started/integration",
    "getting-started/design",
    "getting-started/migration_v3",
  ],
  Guides: [
    "server/configuration",
    "server/console_commands",
    "server/server_api",
    "server/authentication",
    "server/channels",
    "server/private_channels",
    "server/server_subs",
    "server/engines",
    "server/proxy",
    "server/history_and_recovery",
    "server/admin_web",
    "server/monitoring",
    "server/infra_tuning",
    "server/load_balancing",
    "server/tls",
    "server/codes",
  ],
  Transports: [
    "transports/overview",
    {
      type: 'category',
      label: 'Bidirectional',
      collapsed: false,
      items: [
        "transports/websocket",
        "transports/sockjs"
      ],
    },
    {
      type: 'category',
      label: 'Unidirectional',
      collapsed: false,
      items: [
        "transports/uni_websocket",
        "transports/uni_sse",
        "transports/uni_http_stream",
        "transports/uni_grpc",
      ],
    },
    "transports/client_protocol",
  ],
  Pro: [
    "pro/overview",
    "pro/install_and_run",
    {
      type: 'category',
      label: 'PRO features',
      collapsed: false,
      items: [
        "pro/tracing",
        "pro/analytics",
        "pro/user_status",
        "pro/throttling",
        "pro/user_connections",
        "pro/performance",
        "pro/singleflight",
        "pro/db_namespaces",
        "pro/process_stats",
      ],
    },
  ],
  Ecosystem: [
    "ecosystem/client",
    "ecosystem/api",
    "ecosystem/integrations",
    "ecosystem/centrifuge",
  ],
};
