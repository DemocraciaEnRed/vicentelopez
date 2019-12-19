FROM democracyos/democracyos:2.11.4

MAINTAINER Francisco Pensa <francisco@democracyos.io>

COPY ./dos-override/lib/api-v2/topics/csv.js /usr/src/lib/api-v2/topics/csv.js
COPY ./dos-override/lib/admin/admin-topics/export-update/component.js /usr/src/lib/admin/admin-topics/export-update/component.js

ENV LOCALE=es \
  AVAILABLE_LOCALES=es,en \
  ENFORCE_LOCALE=true \
  MODERATOR_ENABLED=true \
  MULTI_FORUM=true \
  RESTRICT_FORUM_CREATION=true \
  FAVICON=/ext/lib/boot/favicon.ico \
  LOGO=/ext/lib/boot/logo.png \
  LOGO_MOBILE=/ext/lib/boot/logo.png \
  NOTIFICATIONS_MAILER_EMAIL=participacion.ciudadana@vicentelopez.gov.ar \
  NOTIFICATIONS_MAILER_NAME='Presupuesto Participativo Vicente Lopez' \
  ORGANIZATION_EMAIL=participacion.ciudadana@vicentelopez.gov.ar \
  ORGANIZATION_NAME='Presupuesto Participativo' \
  SOCIALSHARE_SITE_NAME='Presupuesto Participativo Vicente López' \
  SOCIALSHARE_SITE_DESCRIPTION='Plataforma de participación ciudadana de Vicente Lopez.' \
  SOCIALSHARE_IMAGE=https://cldup.com/xjWy914AyG.jpg \
  SOCIALSHARE_DOMAIN=forosvecinales.org \
  SOCIALSHARE_TWITTER_USERNAME=@ppvicentelopez \
  TWEET_TEXT='Mirá el proyecto que quiero para mi barrio “{topic.mediaTitle}”' \
  HEADER_BACKGROUND_COLOR=#ffffff \
  HEADER_FONT_COLOR=#4a4949
