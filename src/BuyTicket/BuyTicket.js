import { useImportScript } from '../utils/useImportScript'

export const BuyTicket = () => {
    useImportScript('https://www.eventim.pl/obj/nucleus/partner/iframe.js')

    return (
        <>
        <iframe style={{height: "1200px"}} src="https://www.eventim.pl/artist/gliwickiednifantastyki/?affiliate=GPC" width="100%"></iframe><script type="text/javascript"> eventim.iframe(); </script>
        </>
    )
}