import { Fragment } from "react/jsx-runtime"
interface Props {
    text?:string,
    bg?:any,
    count?:number
}
function Header({ ...props }: Props) {
    return (
        <Fragment>
            <div className={`${props?.bg}  flex items-center h-12 pl-4 rounded-md text-sm text-white`}>
                {props?.text}
                <span className="ml-3 bg-white h-5 text-black rounded-full flex items-center justify-center w-5">
                    {props?.count}
                </span>
            </div>

        </Fragment>
    )
}


export default Header