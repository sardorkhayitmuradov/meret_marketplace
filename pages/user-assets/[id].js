import Image from "next/image";
import { exploreCollections } from "@/constants/exploreCollections";
import { Button } from "@/components/button";
import CustomAccordion from "@/components/accordion";
import eth from '../../public/images/ethereum-Black.svg';
import heart from '../../public/images/heart.svg';
import UserAsset from '../../public/images/item-asset.svg';
import arrowDownUp from '../../public/images/chevron-down.svg';
import aboutArt from '../../public/images/aboutArt.svg';
import Eye from '../../public/images/eye.svg';
import Heart from '../../public/images/heartBlack.svg';
import copy from '../../public/images/copy.svg'
import done from '../../public/images/done.svg'

export async function getStaticPaths() {
    const data = exploreCollections;
    const paths = data.map((users) => ({
        params: { id: users.id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = exploreCollections;

    const user = data.find((users) => users.id.toString() === params.id);

    return { props: { user } };
}

export default function UserAssets({ user }) {
    return (
        <main className="py-32">
            <section className="py-10">
                <div className="max-w-xl mx-auto w-full flex gap-7">
                    <div className="flex flex-col max-w-[508px] w-full">
                        <div className="rounded-10 border border-slate-300 mb-6">
                            <div className="pt-[10px] pb-[11px] pl-[18px] pr-[13px] rounded-tl-10 rounded-tr-10 flex items-center justify-between">
                                <Image src={eth} alt="eth" width={13} height={17} />
                                <div className="flex items-center gap-[9px]">
                                    <Image src={heart} alt="heart" width={20} height={20} />
                                    <p className="text-slte-600 text-xs-bold font-NunitoSansSemiBold">30</p>
                                </div>
                            </div>
                            <Image src={UserAsset} alt="UserAsset" width={508} height={508} />
                        </div>
                        <CustomAccordion accordionBodyClassname={'p-4 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-[10px]'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Description'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion accordionBodyClassname={'p-5 border-t flex items-center justify-between bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 border-slate-300 mb-6'} accordionHeaderClassName={'text-slate-900 cursor-pointer text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Properties'}>
                            <div className="max-w-[151px] w-full border border-slate-300 rounded-10 py-3 text-center">
                                <p className="text-violet-800 text-xs-medium font-NunitoSansRegular mb-2">ARTIST</p>
                                <h4 className="text-xs-regular font-NunitoSansSemiBold text-slate-900 mb-2">Maneki Neko</h4>
                                <p className="text-xs-medium text-slate-600 font-NunitoSansSemiBold">New trait</p>
                            </div>
                            <div className="max-w-[151px] w-full border border-slate-300 rounded-10 py-3 text-center">
                                <p className="text-violet-800 text-xs-medium font-NunitoSansRegular mb-2">ARTIST</p>
                                <h4 className="text-xs-regular font-NunitoSansSemiBold text-slate-900 mb-2">Maneki Neko</h4>
                                <p className="text-xs-medium text-slate-600 font-NunitoSansSemiBold">New trait</p>
                            </div>
                            <div className="max-w-[151px] w-full border border-slate-300 rounded-10 py-3 text-center">
                                <p className="text-violet-800 text-xs-medium font-NunitoSansRegular mb-2">ARTIST</p>
                                <h4 className="text-xs-regular font-NunitoSansSemiBold text-slate-900 mb-2">Maneki Neko</h4>
                                <p className="text-xs-medium text-slate-600 font-NunitoSansSemiBold">New trait</p>
                            </div>
                        </CustomAccordion>
                        <CustomAccordion accordionBodyClassname={'p-4 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 border-slate-300 mb-6'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansSemiBold p-4 rounded-10 cursor-pointer'} accordionImage={arrowDownUp} title={'About Maneki Neko Art'}>
                            <div className="flex gap-[22px]">
                                <Image src={aboutArt} alt="eth" width={120} height={120} className="h-[120px]" />

                                <p className="text-slate-600 max-w-[315px] w-full text-base-medium font-NunitoSansSemiBold">
                                    These are 1/1 pieces created by Maneki Neko, minted via the Manifold ERC-721 contract. Check the Collection property on each item to see which series they are a part of, may cross over to her editions collection.
                                </p>
                            </div>
                        </CustomAccordion>
                    </div>

                    <div className="max-w-[661px] w-full">
                        <p className="text-sm-regular font-NunitoSansBold text-violet-800 mb-[17px]">Maneki Neko Art</p>
                        <h3 className="text-2lg-bold text-slte-900 font-NunitoSansBold mb-10">Tommy Project Lillibridge</h3>
                        <div className="flex items-center gap-6 mb-7">
                            <p className="text-lg-medium font-NunitoSansSemiBold text-slate-600">Created by <span className="text-violet-800">Tommy lee</span></p>
                            <div className="flex items-center gap-[10px]">
                                <Image src={Eye} alt="eth" width={24} height={24} />
                                <p className="text-xs-bold font-NunitoSansSemiBold text-slate-600">2.2 views</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Image src={Heart} alt="eth" width={20} height={20} />
                                <p className="text-xs-bold font-NunitoSansSemiBold text-slate-600">30 favarites</p>
                            </div>
                        </div>
                        <div className="p-4 border border-slate-300 rounded-10 bg-slate-50 mb-6">
                            <p className="text-lg-medium font-NunitoSansSemiBold text-slate-600 mb-3">Created by <span className="text-violet-800">Tommy lee</span></p>
                            <div className="flex items-center gap-3 mb-4">
                                <Image src={eth} alt="eth" width={13} height={17} />
                                <p className="text-lg-semibold text-slate-600 font-NunitoSansBold">24,328.16</p>
                                <p className="font-NunitoSansSemiBold text-xs-medium text-slate-400">$2,898.34</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Button className={'rounded-[12px] bg-violet-800 py-[13px] px-[70px] gap-2 flex items-center text-white'}>
                                    <Image src={copy} alt="eth" width={16} height={16} />
                                    <p className="text-xxs-regular font-NunitoSansBold align-middle">Buy now</p>
                                </Button>
                                <Button className={'rounded-[12px] border border-violet-800 py-[13px] px-[70px] gap-2 flex items-center text-violet-800'}>
                                    <Image src={done} alt="eth" width={16} height={16} />
                                    <p className="text-xxs-regular font-NunitoSansBold align-middle">Make offer</p>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}