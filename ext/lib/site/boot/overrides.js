/**
 * Override Forum Home with a custom one located at /ext
 */

import * as HomeForum from 'lib/site/home-forum/component'
import HomeForumExt from 'ext/lib/site/home-forum/component'

HomeForum.default = HomeForumExt
