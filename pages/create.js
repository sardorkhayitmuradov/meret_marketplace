import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Input } from '../components/Input'
import CustomSelect from '@/components/customSelect'
import Form from '../public/images/form.svg'
import arrowDownUp from '../public/images/chevron-down.svg'
import informationCircle from '../public/images/information-circle.svg'
import menu from '../public/images/list-unordered.svg'
import add from '../public/images/add.svg'
import Star from '../public/images/star.svg'
import Bar from '../public/images/bar.svg'
import Unlock from '../public/images/unlock.svg'
import danger from '../public/images/danger.svg'
import { Button } from '@/components/button'


export default function Create() {
    const fileInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [itemName, setItemName] = useState("item name");
    const [itemNumber, setItemNumber] = useState(1)
    const [itemLink, setItemLink] = useState("http://");
    const [itemInfo, setItemInfo] = useState("Provide a detailed description of your item.")

    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["Option 1", "Option 2", "Option 3"];
    const blockChainOptions = ['Ethereum', 'bitcoin', 'dodcoin']

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    }
    return (
        <main className="py-32">
            <section>
                <div className="mx-auto w-full max-w-[772px]">
                    <h3 className="mb-2 font-NunitoSansBold text-xl-bold text-slate-900">
                        Create New Item
                    </h3>
                    <p className="mb-4 font-NunitoSansSemiBold text-xs-regular text-slate-600">
                        <span className="text-[#DB2777]">*</span> Required fields
                    </p>
                    <p className="mb-2 font-NunitoSansBold text-lg-bold text-slate-900">
                        Image, Video, Audio, or 3D Model
                    </p>
                    <p className="mb-8 font-NunitoSansSemiBold text-xs-regular text-slate-600">
                        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
                        GLB, GLTF. Max size: 100 MB
                    </p>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                    <Image onClick={handleButtonClick} src={Form} width={482} height={266} className={`cursor-pointer mb-2 ${selectedFile ? "mb-2" : "mb-7"}`} alt="My image" />
                    {selectedFile && <p className='font-NunitoSansSemiBold text-xs-regular text-slate-600 mb-7'>Selected File: {selectedFile.name}</p>}
                    <div className='flex flex-col gap-2 mb-8'>
                        <label for="item" className='font-NunitoSansBold text-xl-medium text-slate-900'>Name <span className='text-[#DB2777]'>*</span></label>
                        <Input type={'text'} placeholder={'item name'} nameValue={'item'} value={itemName} onGetValue={(e) => setItemName(e.target.value)} className={'p-4 outline-none w-full font-NunitoSansRegular mx-auto rounded-10 border-slate-300 text-xxs-regular border'} />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label for="itemLink" className='font-NunitoSansBold text-xl-medium text-slate-900'>External link</label>
                        <span className='mt-2 mb-4 text-xs-regular text-slate-600 font-NunitoSansSemiBold'>MERET will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</span>
                        <Input type={'text'} nameValue={'itemLink'} value={itemLink} onGetValue={(e) => setItemLink(e.target.value)} className={'p-4 outline-none w-full font-NunitoSansRegular mx-auto rounded-10 border-slate-300 text-xxs-regular border'} />
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label for="itemInfo" className='font-NunitoSansBold text-xl-medium text-slate-900'>Description</label>
                        <span className='mt-2 mb-6 text-xs-regular text-slate-600 font-NunitoSansSemiBold'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</span>
                        <textarea name="itemInfo" className='p-4 outline-none w-full font-NunitoSansRegular mx-auto rounded-[18px] border-slate-300 text-xxs-regular border' id="itemInfo" cols="30" rows="7" value={itemInfo} onChange={(e) => setItemInfo(e.target.value)}></textarea>
                    </div>
                    <div className='flex flex-col w-full mb-6'>
                        <label for="itemInfo" className='font-NunitoSansBold text-xl-medium text-slate-900'>Collection</label>
                        <div className='flex items-center gap-2 mt-2 mb-4'>
                            <span className='text-xs-regular text-slate-600 font-NunitoSansSemiBold rounded-br'>This is the collection where your item will appear. </span>
                            <Image src={informationCircle} width={24} height={24} className={`cursor-pointer`} alt="My image" />
                        </div>
                        <CustomSelect
                            selectWrapperClassName={"w-full relative mb-9"}
                            selectHeaderClassName={"w-full p-4 text-xs-regular font-NunitoSansSemiBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-12 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-4 text-xs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            placeholder={'Select collection'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDownUp}
                            setSelectedOption={setSelectedOption}
                        />
                        <ul className='w-full flex flex-col'>
                            <li className='flex items-center w-full gap-[25px] border-b py-[10px] border-slate-300'>
                                <Image src={menu} width={24} height={24} className={`cursor-pointer`} alt="My image" />
                                <div className='flex items-center w-full'>
                                    <div className='w-full'>
                                        <h3 className='text-lg-bold text-slate-900 font-NunitoSansBold mb-2'>Properties</h3>
                                        <p className='text-xs-regular text-slate-600 font-NunitoSansSemiBold'>Textual traits that show up as rectangles</p>
                                    </div>
                                    <Image src={informationCircle} width={24} height={24} className={`cursor-pointer mr-[15px]`} alt="My image" />

                                </div>
                                <div className='rounded-5 bg-violet-800 p-3 cursor-pointer'>
                                    <Image src={add} width={18} height={18} className={`cursor-pointer`} alt="My image" />

                                </div>
                            </li>
                            <li className='flex items-center w-full gap-[25px] border-b py-[10px] border-slate-300'>
                                <Image src={Star} width={24} height={24} className={`cursor-pointer`} alt="My image" />
                                <div className='flex items-center w-full'>
                                    <div className='w-full'>
                                        <h3 className='text-lg-bold text-slate-900 font-NunitoSansBold mb-2'>Levels</h3>
                                        <p className='text-xs-regular text-slate-600 font-NunitoSansSemiBold'>Numerical traits that show as a progress bar</p>
                                    </div>
                                </div>
                                <div className='rounded-5 bg-violet-800 p-3 cursor-pointer'>
                                    <Image src={add} width={18} height={18} className={`cursor-pointer`} alt="My image" />

                                </div>
                            </li>
                            <li className='flex items-center w-full gap-[25px] border-b py-[10px] border-slate-300'>
                                <Image src={Bar} width={24} height={24} className={`cursor-pointer`} alt="My image" />
                                <div className='flex items-center w-full'>
                                    <div className='w-full'>
                                        <h3 className='text-lg-bold text-slate-900 font-NunitoSansBold mb-2'>Stats</h3>
                                        <p className='text-xs-regular text-slate-600 font-NunitoSansSemiBold'>Numerical traits that just show as numbers</p>
                                    </div>
                                </div>
                                <div className='rounded-5 bg-violet-800 p-3 cursor-pointer'>
                                    <Image src={add} width={18} height={18} className={`cursor-pointer`} alt="My image" />

                                </div>
                            </li>
                            <li className='flex items-center w-full gap-[25px] border-b py-[10px] border-slate-300'>
                                <Image src={Unlock} width={24} height={24} className={`cursor-pointer`} alt="My image" />
                                <div className='flex items-center w-full'>
                                    <div className='w-full'>
                                        <h3 className='text-lg-bold text-slate-900 font-NunitoSansBold mb-2'>Unlockable Content</h3>
                                        <p className='text-xs-regular text-slate-600 font-NunitoSansSemiBold'>Include unlockable content that can only be revealed by the owner of the item.</p>
                                    </div>

                                </div>
                                <div className='rounded-5 bg-violet-800 p-3 cursor-pointer'>
                                    <Image src={add} width={18} height={18} className={`cursor-pointer`} alt="My image" />

                                </div>
                            </li>
                            <li className='flex items-center w-full gap-[25px] border-b py-[10px] border-slate-300'>
                                <Image src={danger} width={24} height={24} className={`cursor-pointer`} alt="My image" />
                                <div className='flex items-center w-full'>
                                    <div className='w-full'>
                                        <h3 className='text-lg-bold text-slate-900 font-NunitoSansBold mb-2'>Explicit & Sensitive Content</h3>
                                        <p className='text-xs-regular text-slate-600 font-NunitoSansSemiBold'>Set this item as explicit and sensitive content</p>
                                    </div>

                                </div>
                                <div className='rounded-5 bg-violet-800 p-3 cursor-pointer'>
                                    <Image src={add} width={18} height={18} className={`cursor-pointer`} alt="My image" />

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label for="itemLink" className='font-NunitoSansBold text-xl-medium text-slate-900'>Supply</label>
                        <span className='mt-2 mb-4 text-xs-regular text-slate-600 font-NunitoSansSemiBold'>The number of items that can be minted. No gas cost to you! </span>
                        <Input type={'number'} nameValue={'itemNumber'} value={itemNumber} onGetValue={(e) => setItemNumber(e.target.value)} className={'p-4 outline-none bg-slate-50 w-full font-NunitoSansRegular mx-auto rounded-10 border-slate-300 text-xxs-regular border appearance-none'} />
                    </div>
                    <div className='w-full mb-6'>
                        <label for="itemInfo" className='font-NunitoSansBold text-xl-medium text-slate-900'>Blockchain</label>
                        <CustomSelect
                            selectWrapperClassName={"w-full relative mb-9 mt-3"}
                            selectHeaderClassName={"w-full p-4 text-xs-regular font-NunitoSansSemiBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-12 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-4 text-xs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={blockChainOptions}
                            placeholder={'Select the blockchain'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDownUp}
                            setSelectedOption={setSelectedOption}
                        />
                    </div>
                    <div className='flex flex-col mb-6'>
                        <label for="itemLink" className='font-NunitoSansBold text-xl-medium text-slate-900'>Freeze metadata</label>
                        <span className='mt-2 mb-4 text-xs-regular text-slate-600 font-NunitoSansSemiBold'>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</span>
                        <p className='p-4 bg-slate-50 w-full font-NunitoSansSemiBold mx-auto rounded-10 border-slate-300 text-xxs-regular border appearance-none'>To freeze your metadata, you must create your item first.</p>
                    </div>
                    <Button className={'py-4 px-9 bg-violet-800 rounded-[16px] font-NunitoSansBold text-xl-medium text-white'}>
                        Create
                    </Button>
                </div>
            </section>
        </main>
    )
}
