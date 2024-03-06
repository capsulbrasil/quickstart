// @ts-check
const fs = require('fs')
const path = require('path')

const main = async () => {
  const aeriaUi = path.join('web', '.aeria-ui')
  if( fs.existsSync('aeria.d.ts') ) {
    await fs.promises.rename('aeria.d.ts',
      path.join('api', 'aeria.d.ts'))
  }

  if( fs.existsSync('.aeria-ui') ) {
    if( !fs.existsSync(aeriaUi) ) {
      await fs.promises.rename(
        '.aeria-ui',
        path.join('web', '.aeria-ui')
      )
    } else {
      const files = await fs.promises.readdir(aeriaUi)
      for( const file of files ) {
        await fs.promises.rename(
          path.join('.aeria-ui', file),
          path.join(aeriaUi, file),
        )
      }

      await fs.promises.rmdir('.aeria-ui')
    }
  }
}

main()

