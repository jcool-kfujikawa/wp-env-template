import chokidar from 'chokidar';
import { exec } from 'child_process';

// `src/public`フォルダの変更を監視
const watcher = chokidar.watch('src/public', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

// 変更があった場合にビルドを再実行
watcher.on('all', () => {
  exec('vite build', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing build: ${err}`);
      return;
    }
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  });
});
