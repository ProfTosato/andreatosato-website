# Stablecoins and Private Law

## What Is a Stablecoin?

Stablecoins are digital assets issued on public blockchain networks that are designed to maintain a stable price relative to a reference asset, most commonly the United States dollar.[^1] Unlike volatile cryptocurrencies such as Bitcoin and Ether, whose prices are driven primarily by supply and demand and market sentiment, stablecoins combine the technological advantages of distributed ledger technology — disintermediation, cryptographic security, rapid settlement — with the price stability of traditional currencies.[^2] From approximately $1 billion in circulation in 2019, total stablecoin supply now exceeds $250 billion and is projected to reach $4 trillion by 2030, with major payment providers including PayPal and Western Union actively incorporating stablecoins into their product portfolios and leading financial institutions such as Fidelity exploring stablecoin issuance.[^3]

Stablecoins now serve multiple functions within the financial system. Their original and still predominant use is as a base currency for trading other digital assets. They have also become the preferred settlement medium in decentralized finance protocols, facilitate billions of dollars in cross-border payments annually, and are increasingly used as an inflation hedge in economies where domestic payment systems lack trust and coverage.[^4] This growing economic significance has prompted regulatory responses on both sides of the Atlantic, culminating in the European Union's Markets in Crypto-Assets Regulation (MiCAR) and the United States' GENIUS Act, enacted in July 2025.[^5]

Understanding the legal architecture of stablecoins is essential for practitioners, lawmakers, researchers, and students navigating this rapidly evolving landscape. The analysis that follows draws upon Professor Tosato's scholarship to address the questions most frequently asked about these instruments. Throughout, the reader should bear in mind a distinction that runs through every question: the analysis often diverges significantly depending on whether one is considering a centralized stablecoin, issued by an identifiable company such as Tether or Circle, or a decentralized stablecoin, controlled by an autonomous software protocol such as MakerDAO. Most readers will be primarily interested in centralized stablecoins, which dominate the market, but the decentralized variants raise distinct legal challenges that are noted where relevant.


## What Are the Different Types of Stablecoins?

There is no universally agreed upon definition of a stablecoin. However, from a legal perspective, stablecoins can be decomposed into three constitutive elements, each with distinct private law implications: the issuer, the peg, and the stabilization mechanism.[^6] Other taxonomies exist from computer science and economics perspectives, but this legal taxonomy is the one that governs the analysis of the rights, obligations, and risks of stablecoin holders.

**The Issuer.** The majority of stablecoins are centralized: they are controlled by a single, identifiable entity.[^7] Tether's USDT is issued by Tether International, S.A. de C.V., a company that migrated from the British Virgin Islands to El Salvador. Circle's USDC is issued by Circle Internet Financial, LLC, a Delaware limited liability company that completed its initial public offering in June 2025.[^8] Centralized issuers have complete control over the design, creation (minting), destruction (burning), and operation of their stablecoins, and they constitute identifiable counterparties with which coinholders can enter into a contractual relationship.[^9]

Not all stablecoins, however, have an identifiable issuer. Decentralized stablecoins are controlled by software protocols — bundles of interconnected smart contracts deployed on distributed ledger networks such as Ethereum — that create stablecoins and manage every aspect of their operation automatically, pursuant to their code.[^10] The largest decentralized stablecoin, DAI, is controlled by the MakerDAO protocol, which has no legal personhood. Users interact exclusively with code rather than corporate counterparties. Updates and modifications to the protocol are effectuated through voting by holders of a separate governance token (MKR).[^11] If a decentralized stablecoin collapses, coinholders have no rights to recover the assets transferred, no counterparty to sue, and virtually no recourse.[^12]

**The Peg.** Almost all stablecoins are pegged to either a currency or a precious metal. The United States dollar is overwhelmingly the most common choice, constituting 99% of the market capitalization of fiat-pegged stablecoins.[^13] Gold-pegged stablecoins such as PAXG and XAUT also exist, though their market capitalization is significantly smaller.[^14]

**The Stabilization Mechanism.** Three mechanisms are prevalent. First, reserve-backed models in which issuers hold pools of valuable assets and commit to mint and redeem stablecoins at a predetermined rate (typically one token for one dollar), relying on economic arbitrage to suppress price fluctuations.[^15] This is the model used by Tether, Circle, and other leading centralized issuers. Second, dual-coin structures in which a primary stablecoin is linked to a secondary coin designed to absorb volatility; the viability of this mechanism is contingent on the secondary coin retaining value, and multiple projects built on this model — including TerraUSD/Luna — have collapsed catastrophically.[^16] Third, algorithmic mechanisms that adjust the supply of stablecoins in circulation to counteract price swings, operating as a quasi-central bank; the challenge is that the only value buttressing these stablecoins is their scarcity and the algorithm itself, and if market participants lose confidence, collapse is inevitable.[^17]


## How Do Stablecoins Maintain Their Peg?

For centralized, reserve-backed stablecoins — the dominant model — the stabilization mechanism operates through economic arbitrage.[^18] Issuers hold large asset pools and undertake to supply one stablecoin to anyone who tenders one dollar and, conversely, to redeem each stablecoin for one dollar. When the market price of a stablecoin dips below one dollar, arbitrageurs purchase tokens in the open market and redeem them with the issuer for one dollar, netting a profit and contracting supply until the price recovers. When the market price rises above one dollar, arbitrageurs mint new tokens from the issuer and sell them at a profit, expanding supply and lowering the price.[^19]

This mechanism is not novel — it can be traced to seventeenth-century European banks that issued deposits backed by precious metal coins, and it underpinned the Bretton Woods accord.[^20] Its viability depends entirely on market confidence that the issuer maintains sufficient reserves and will honor redemption requests. It follows that the contractual terms pursuant to which issuers promise to perform these operations and manage their reserves are critical.[^21]

For decentralized stablecoins such as DAI, the stabilization mechanism is different. Users deposit volatile digital assets (such as Ether) into non-custodial vaults controlled by the protocol's smart contracts and can generate DAI up to a predetermined percentage of the value of those locked assets.[^22] The specific ratios vary by asset type and are established through governance; for example, a user depositing $1,000 worth of Ether might be able to generate up to $750 worth of DAI. Because the value of the locked assets always exceeds the value of DAI generated, the system maintains a surplus that serves as a buffer against price volatility. If the market value of deposited assets declines below a safety threshold, the protocol automatically seizes and auctions them, with the proceeds burned to reduce the DAI supply and maintain the peg.[^23] No issuer stands behind this process; it is purely algorithmic.

An important practical consideration is that transaction fees can undermine the stabilization mechanism. Tether, for example, charges a 0.1% fee for minting and the greater of $1,000 or 0.1% for redemption, with $100,000 minimum thresholds.[^24] Arbitrageurs will only act to correct price deviations to the extent the spread exceeds total fees, meaning that a 0.2% total fee creates a floor below which the arbitrage mechanism does not operate.[^25]


## Are Stablecoins Money?

Whether stablecoins function as money is the central question addressed in a forthcoming article in the *Yale Law Journal*, co-authored with Christopher K. Odinet and Yesha Yadav.[^26] The article develops an original framework for "moneyness" — a concept that captures the degree to which an instrument's legal and institutional architecture enables it to perform monetary functions.

The conventional definition of money looks to three characteristic features: a unit of account, a store of value, and a medium of exchange.[^27] But these functional definitions tell us what money does, not what money is, and they do not explain how something becomes money. The *Moneyness* article identifies a critical yet undertheorized dimension: an instrument's capacity to operate effectively within the domain of private law.[^28]

The framework identifies four constitutive elements of moneyness. The first is foundational: the **nature and substance of the claim** — what legal right does the holder possess? Public money (Federal Reserve notes, central bank reserves) is sui generis: the instrument constitutes money rather than evidencing a right to receive it.[^29] Private money (bank deposits, stablecoin claims) consists of contractual obligations requiring privity and exposing holders to counterparty risk.[^30] The second element is **safety** — whether the issuer is likely to honor its undertakings and what recovery holders can expect if it fails.[^31] The third is **discharge capacity** — whether creditors will accept the instrument in satisfaction of obligations and whether transfers achieve legal finality.[^32] The fourth is **negotiability** — whether recipients can take the instrument free of competing claims and defenses, permitting circulation without inquiry into provenance.[^33]

The relationship among these elements is conjunctive, not additive: an instrument that fails to achieve adequacy in any single element cannot function reliably as money, regardless of how well it performs on the others.[^34]

Stablecoins occupy an unambiguous position in the monetary hierarchy: they are private money. The GENIUS Act makes this classification explicit, providing that it is unlawful to represent that payment stablecoins are backed by the full faith and credit of the United States or subject to federal deposit insurance.[^35] The *Moneyness* article's assessment reveals that the GENIUS Act brings genuine improvements to stablecoin moneyness yet fails to resolve critical deficiencies across safety, discharge capacity, and the legal nature of the redemption claim.[^36]

For decentralized stablecoins, the moneyness analysis is even more stark. These instruments lack an identifiable issuer, have no contractual redemption right, provide no claim against any entity's reserves, and operate in a comprehensive legal vacuum.[^37]


## What Is the Difference Between a Stablecoin and a Bank Deposit?

[AUTHOR: This answer needs your review and refinement. Your papers provide the analytical framework but do not present this comparison head-on. The following draws on the Moneyness paper's analysis of the four safety layers for bank deposits versus their absence for stablecoins.]

A bank deposit is a contractual debt claim representing an unsecured personal right to receive a determinate monetary sum from the depositing bank.[^38] Though formally an unsecured claim, bank deposits are transformed into near-equivalents of public money by four interlocking layers of legal protection: federal deposit insurance guaranteeing accounts up to $250,000; access to Federal Reserve liquidity facilities during stress; comprehensive prudential supervision including capital and liquidity requirements; and a tailored FDIC resolution regime outside ordinary bankruptcy that prioritizes rapid depositor recovery.[^39] These protections render bank deposits informationally insensitive — holders can accept them at par without investigating the issuing bank's financial condition.[^40]

A centralized stablecoin, by contrast, benefits from none of these layers. The GENIUS Act explicitly denies federal deposit insurance to stablecoin holders.[^41] Stablecoin issuers have no access to Federal Reserve liquidity facilities, leaving them vulnerable to the mismatch between crypto's 24/7 settlement cycle and traditional banking hours — a vulnerability starkly illustrated when Silicon Valley Bank's weekend failure in March 2023 drove USDC to trade at $0.88 as Circle could not access its $3.3 billion in reserves held at the failed bank.[^42] While the GENIUS Act introduces reserve requirements and custody rules, it does not replicate the comprehensive prudential supervision that governs bank operations. And the Act's bankruptcy provisions, while unprecedented in their ambition, are internally contradictory and operationally incoherent in ways that may paradoxically harm the holders they seek to protect.[^43]

The result is that prudent holders of stablecoins must assess the soundness of both the issuer and its reserve custodians before accepting payment — a burden incompatible with money's basic function as an instrument accepted at face value without investigation.[^44]

For decentralized stablecoins, the comparison is more extreme still: there is no issuer to assess, no reserves held in custody, no deposit insurance, and no legal recourse of any kind in the event of failure.[^45]


## What Is the Difference Between a Stablecoin and Electronic Money?

[AUTHOR: This answer is inferred from the Moneyness paper's analysis of non-bank payment claims and the Regulating Centralized Stablecoins essay's discussion of MiCAR's e-money token category. Please review.]

Electronic money (e-money) — the balance held in a digital wallet with a provider such as PayPal or Cash App — shares important characteristics with stablecoins. Both are non-bank payment claims: contractual obligations of non-state, private institutions evidencing a right to receive value.[^46] Both lack the comprehensive safety architecture that transforms bank deposits into near-equivalents of public money. And both present heterogeneous legal frameworks that vary by provider and jurisdiction.[^47]

However, stablecoins differ from traditional e-money in several material respects. First, e-money balances are confined to the provider's closed-loop network and cannot be transferred peer-to-peer without intermediation, whereas stablecoins transfer on public blockchain networks without requiring the provider's involvement.[^48] Second, e-money providers in the European Union are subject to the Electronic Money Directive, which imposes specific safeguarding requirements and grants holders a statutory right of redemption at par value at any time — protections that the EU has extended to stablecoins through MiCAR's e-money token (EMT) category.[^49] Third, the legal relationship between an e-money holder and the provider, while governed by heterogeneous provider-specific terms, is always contractual — privity exists. For stablecoins, the vast majority of holders (those who acquire tokens on secondary markets rather than directly from the issuer) have no contractual relationship with the issuer whatsoever.[^50]

Under MiCAR, stablecoins pegged to a single fiat currency are classified as EMTs and subjected to the electronic money regulatory framework, including unconditional redemption rights, a prohibition on redemption fees, and strict liability for misleading disclosures.[^51] The GENIUS Act takes a different approach, creating a unified "payment stablecoin" category defined by functional redeemability rather than by analogy to e-money.[^52]


## What Kind of Property Is a Stablecoin Under Private Law, and What Legal Rights Does a Stablecoin Holder Have Against the Issuer?

This question sits at the intersection of two of Professor Tosato's major contributions and requires careful attention to a distinction that the GENIUS Act leaves unresolved: the distinction between the stablecoin token itself and any rights that may be linked to it.

**The token as property.** Under UCC Article 12, stablecoins qualify as controllable electronic records (CERs) — a novel category of personal property introduced by the 2022 amendments to the Uniform Commercial Code.[^53] Both verified account holders and secondary market participants own their stablecoin tokens as personal property under this framework. The qualifying purchaser rule under Section 12-104(e) provides that a person who obtains control of a CER for value, in good faith, and without notice of conflicting claims acquires the CER free from any adverse property claim.[^54] This provides genuine negotiability for the token itself.

**The redemption right as a separate asset.** The critical difficulty is that the redemption right — the claim to receive one dollar from the issuer — is an entirely separate and distinct asset, subject to a different private law regime.[^55] Under existing issuer terms of service (before the GENIUS Act), the redemption right is a contractual claim governed by ordinary rules for the assignment of contract rights. Assignees take subject to all defenses, claims, and setoffs that the issuer could assert against the assignor.[^56] A transferee might therefore obtain clean title to the stablecoin token under Article 12 while simultaneously acquiring a redemption right subject to issuer defenses arising from the conduct of prior holders.[^57]

**Two constructions under the GENIUS Act.** The Act defines a payment stablecoin as a digital asset whose issuer "is obligated to convert, redeem, or repurchase for a fixed amount of monetary value," but does not resolve whether this obligation is embedded in the token or remains separate.[^58] Two possible constructions exist:

Under the first construction — which the authors of the *Moneyness* article consider the most reasonable interpretation — the GENIUS Act tokenizes the redemption right, meaning it is embedded in and inseparable from the digital asset itself. The redemption right runs to whomever controls the stablecoin, following the model of negotiable instruments where the holder possesses enforcement rights.[^59] This construction would facilitate the use of stablecoins as negotiable instruments, with Article 12's qualifying purchaser protections shielding both the token and the redemption right.

Under the second construction, the token and the redemption right remain two distinct things governed by different legal regimes. If the redemption right is contractual, the current status quo would persist: the right would run only to the issuer's contractual counterparty. If statutory, the right would run to whomever the statute is deemed to benefit — but whether that is the owner or the controller of the stablecoin remains unspecified.[^60]

The stakes of this interpretive choice are considerable. The former approach enables true negotiability and allows the token to function as a complete monetary instrument carrying its value-realization mechanism within itself. The latter introduces complexity and uncertainty into every stablecoin transaction.[^61]

**Pre-GENIUS Act: the two-tiered system.** Before the GENIUS Act, the private law framework was even more restrictive. Tether limited direct contractual relationships to only 882 verified customer accounts worldwide; Circle to 1,834 Circle Mint accounts.[^62] Secondary market holders — the vast majority — existed in a legal vacuum vis-à-vis the issuer, possessing stablecoin tokens as personal property under Article 12 but maintaining no contractual privity and consequently no direct redemption claim.[^63]

**For decentralized stablecoins**, the analysis collapses entirely. There is no issuer, no contractual relationship, no redemption right, and no entity against which any claim could be asserted. Users interact exclusively with autonomous code.[^64]


## Does a Stablecoin Holder Have a Property Right in the Issuer's Reserves?

This is among the most consequential questions for stablecoin holders, and the answer has shifted significantly with the enactment of the GENIUS Act.

**Before the GENIUS Act**, stablecoin issuers' representations of their reserve holdings fell on a spectrum ranging from custodial arrangements that might shield reserves from creditor claims to clear indications that reserves were issuer property.[^65] At one end, issuers such as Gemini and Paxos (both organized as New York limited trust companies) made the strongest assertions that reserves might be excluded from their bankruptcy estates. At the other end, Tether's terms of service made clear that reserves were within its "sole control and at the sole and absolute discretion of Tether" and that the redemption right was "a contractual right personal to [the client]" — language indicating no proprietary interest in reserves.[^66] Circle, after initially providing ambiguous signals, amended its user agreement in June 2022 to broadly disclaim any trust, fiduciary, or qualified custodian status.[^67]

**The GENIUS Act transforms this framework** through amendments to the Bankruptcy Code. The Act excludes required reserves from the debtor's estate entirely, creating complete bankruptcy remoteness.[^68] It ensures that all stablecoin holders — including secondary market holders without contractual privity — have standing in bankruptcy proceedings.[^69] And it grants holders priority over all other creditors with respect to reserves, as well as a super-priority for any reserve shortfall over the issuer's entire estate, including administrative expenses.[^70]

However, the Act does not grant holders direct proprietary rights in reserves. The reserves remain issuer assets, albeit segregated.[^71] This preserves the fundamental debtor-creditor relationship. Moreover, the Act's bankruptcy provisions are internally contradictory: they exclude reserves from the estate yet extend the automatic stay to those reserves and direct courts to administer their distribution — provisions that presuppose reserves are property of the estate.[^72] The super-priority provision risks creating administratively insolvent estates where no trustee, attorney, or debtor-in-possession lender would agree to service a reorganization when their fees are subordinate to the potentially massive liability of the stablecoin float.[^73]

In the authors' view, the preferable approach would be to grant stablecoin holders a perfected security interest in reserve assets under UCC Article 9, integrating stablecoins into established commercial law and bankruptcy infrastructure rather than retrofitting special protections through ad hoc amendments.[^74]

**For decentralized stablecoins**, the question of property rights in reserves takes a different form. There are no reserves in the traditional sense. Assets are locked in non-custodial smart contract vaults by the users themselves, and no entity holds or controls them on behalf of anyone. The protocol's automated seizure and auction mechanisms operate without consent or legal authorization in the traditional property law sense, creating profound uncertainties regarding the validity of transfers.[^75]


## How Are Stablecoins Transferred Under Private Law?

Stablecoins can transfer either peer-to-peer on public blockchain networks or through centralized platforms such as Coinbase, Gemini, and Kraken. This duality means that a complete analysis of stablecoin transfers must address both scenarios — and for neither has law supplied the finality rules that govern other payment forms.[^76]

**Acceptance.** Unlike physical currency, which a creditor must generally accept under legal tender statutes, stablecoins require the express agreement of the counterparty.[^77] This shifts the question from public mandate to transaction-by-transaction negotiation. The reliance on private ordering for acceptance is further complicated by the fragmentation of the underlying blockchain infrastructure: stablecoins issued on Ethereum cannot simply be transferred to a creditor with a Solana wallet without bridging mechanisms that introduce additional costs and security risks.[^78]

**Finality.** No statute or judicial precedent establishes when a stablecoin payment achieves finality — the point at which the payor's obligation to the payee is extinguished and the transaction is closed to subsequent challenge.[^79] For peer-to-peer transfers, the *Moneyness* article proposes that transfer of control, as defined by UCC Article 12, should effect discharge of the payor's obligation, extending the logic that control of a controllable electronic record is the functional equivalent of possession of a tangible asset.[^80] For intermediated transfers, no equivalent to UCC Article 4A exists for stablecoin intermediaries, which vary dramatically from regulated domestic exchanges to offshore platforms to decentralized finance protocols controlled by DAOs.[^81]

The GENIUS Act entirely disregards these issues. Neither acceptance mandates nor finality rules appear in the statute.[^82]


## How Does UCC Article 12 Apply to Stablecoins?

Stablecoins qualify as controllable electronic records (CERs) under UCC Article 12 — the first comprehensive American legal framework for commercial transactions involving digital assets, adopted in 2022 and now enacted in thirty-three jurisdictions.[^83] Article 12 governs the token itself — the electronic record stored on the blockchain. However, any rights purportedly linked to that electronic record (such as the redemption right) are governed by other law as applicable.[^84]

This distinction is critical. Article 12's qualifying purchaser rule provides robust protection for transferees of the token: a person who obtains control for value, in good faith, and without notice of conflicting claims takes the CER free from any adverse property claim.[^85] But the redemption right, as a separate asset under a different legal regime, may not benefit from the same protections. A transferee could acquire clean title to the stablecoin token while simultaneously acquiring a redemption right subject to issuer defenses arising from prior holders' conduct.[^86]

The *Moneyness* article argues that Congress should resolve this asymmetry by explicitly providing that the redemption right is embedded in the token such that control of the stablecoin under Article 12 carries with it the entitlement to demand redemption — following the model of negotiable instruments where the holder possesses enforcement rights.[^87]

For a comprehensive analysis of UCC Article 12 and controllable electronic records, see the companion research page on [UCC Article 12 and Controllable Electronic Records](/research/ucc-article-12).


## Can Stablecoins Be Used as Collateral in Secured Transactions?

Under the 2022 UCC amendments, stablecoins as controllable electronic records can be used as collateral under Article 9's secured transactions framework. Two pathways exist for perfection: filing a financing statement in the relevant public registry, or taking control of the CER.[^88] Control-based perfection eliminates the jurisdictional complexities associated with determining the correct filing location — a particularly thorny issue for digital assets — and provides priority over competing security interests held by secured parties who do not have control.[^89]

The *Private Law of Stablecoins* article additionally proposes that stablecoins backed by commodities such as gold could be structured as electronic negotiable documents of title under UCC Article 7, deployed as tokens on distributed ledger networks.[^90] Under this structure, the combined Article 7 and Article 9 regime would provide simple avenues to acquire title and take security that would support the rapid circulation of these stablecoins and their use as collateral — a regime very similar to that which the UCC reserves for "money."[^91]


## What Happens When Stablecoins Are Held Through an Intermediary?

When a user holds stablecoins through a centralized platform such as Coinbase or Gemini, the transaction may occur entirely on the platform's internal ledger rather than on the public blockchain, or it may involve multiple steps across different systems. In either case, intermediaries stand between the holder and the issuer, creating additional layers of credit risk.[^92]

No comprehensive legal framework governs these intermediated stablecoin holdings. UCC Article 4A, which provides the statutory framework for bank-mediated wire transfers, cannot be applied analogically because stablecoin intermediaries share none of the characteristics that make Article 4A effective: they vary dramatically in form, operate under inconsistent regulatory regimes, and bear no uniform obligations to customers.[^93]

UCC Article 8 offers a potential pathway. If reserves were treated as "financial assets" held in "securities accounts," holders would receive more robust protection through Article 8's security entitlement regime, which insulates customer assets from the intermediary's creditors.[^94] However, neither existing market practice nor the GENIUS Act requires this treatment.

For the millions of stablecoin holders who acquired tokens through secondary markets and hold them on exchange platforms, the insolvency risk is acute. These holders have no direct relationship with the stablecoin issuer and therefore, absent the GENIUS Act's standing provisions, would likely have no standing to file claims in the issuer's bankruptcy proceedings. They would be entirely dependent on whatever recovery their intermediary platform might achieve as an unsecured creditor, creating multiple layers of credit risk.[^95]


## What Happens to Stablecoin Holders When an Issuer Becomes Insolvent?

The treatment of stablecoin holders in issuer insolvency has been fundamentally reshaped by the GENIUS Act, but significant uncertainties remain.

**Before the GENIUS Act**, stablecoin holders faced a grim prospect. For the two largest issuers (Tether and Circle), reserves were likely property of the issuer's bankruptcy estate, and holders would be classified as general unsecured creditors — potentially receiving pennies on the dollar or nothing at all.[^96] Even for issuers like Gemini and Paxos that made custodial representations, establishing that reserves were excluded from the estate would require protracted and expensive litigation.[^97] Secondary market holders — the vast majority — arguably had no standing to file claims at all.[^98]

**The GENIUS Act** introduces unprecedented bankruptcy protections. Reserves are excluded from the estate entirely.[^99] All stablecoin holders, regardless of contractual privity, are deemed to hold claims.[^100] Holders receive priority over all other creditors with respect to reserves, and a super-priority for any reserve shortfall.[^101]

However, the Act's bankruptcy provisions suffer from multiple internal contradictions that may undermine their effectiveness.[^102] The automatic stay is extended to reserves that are simultaneously excluded from the estate — a conceptual incoherence, since the stay exists to protect estate property.[^103] The bankruptcy court is directed to begin distributions to holders within fourteen days, presupposing judicial administration of assets supposedly outside the estate.[^104] The super-priority provision subordinates administrative expenses to holder claims, creating the risk that no trustee, attorney, or DIP lender would agree to service a reorganization — paradoxically harming the very holders the Act seeks to protect.[^105]

In the authors' view, the core problem is methodological: Congress attempted to retrofit special protections onto a claim whose fundamental legal nature was not fully understood, rather than first determining what stablecoin claimants actually own and allowing bankruptcy treatment to flow as a logical consequence.[^106] The preferable approach would be to grant holders a perfected security interest in reserve assets under UCC Article 9, integrating their claims into the existing commercial law and bankruptcy infrastructure.[^107]

**For decentralized stablecoins**, there is no issuer to become insolvent and no estate to administer. The protocol's Emergency Shutdown mechanism provides a limited substitute: upon activation, vault creation ceases, pending auctions complete, and DAI holders claim proportional shares of the remaining asset portfolio. If aggregate asset value falls below total DAI supply, holders receive less than one dollar per token.[^108]


## What Reserve Requirements Apply to Stablecoin Issuers Under the GENIUS Act?

The GENIUS Act mandates one-to-one reserve backing, requiring issuers to maintain reserves equal to all outstanding stablecoins.[^109] These reserves must consist exclusively of low-risk assets: United States currency, Treasury securities, central bank reserves, and repurchase agreements collateralized by Treasuries.[^110] This eliminates the discretion issuers previously exercised over reserve composition — Tether, for example, historically held commercial paper, secured loans, precious metals, and crypto-assets in its reserves.[^111]

The Act imposes strict custody requirements: reserves must be held with qualified custodians (insured depository institutions, trust companies, or authorized Federal Reserve Banks), segregated from custodian assets, and identified as customer assets.[^112] Rehypothecation is categorically prohibited except for limited liquidity management.[^113]

The Act's regulatory architecture rests on a "narrow bank" model in which safety derives from what the issuer holds rather than who stands behind it.[^114] Issuers are restricted from engaging in traditional onward lending — they cannot perform fractional reserve banking.[^115] However, a critical gap remains: non-bank issuers must entrust reserves to third-party custodians such as commercial banks, which themselves may use the funds for ordinary lending activities. The Act's prohibition on fractional reserve banking operates directly on issuers but cannot prevent the practices of their custodians.[^116]


## What Redemption Rights Do Stablecoin Holders Have?

The GENIUS Act fundamentally restructures redemption rights by transforming them from revocable contractual privileges into statutory obligations.[^117] The Act defines a payment stablecoin as a digital asset whose issuer "is obligated to convert, redeem, or repurchase for a fixed amount of monetary value."[^118] It strips issuers of unilateral power to suspend redemption, providing that discretionary limitations can only be imposed by designated public regulators.[^119]

However, the Act leaves critical ambiguities unresolved. It does not explicitly address whether the redemption obligation extends to all token holders or only those with direct issuer relationships.[^120] It remains silent on minimum transaction thresholds, processing timeframes, and verification requirements. Issuers retain discretion to set fee levels, minimum redemption amounts, and eligibility criteria — nothing prevents them from maintaining current gatekeeping that limits direct redemption to institutional clients.[^121]

It bears emphasis that redemption rights exist primarily for centralized stablecoins regulated under the GENIUS Act. For decentralized stablecoins such as DAI, there is no redemption right in any conventional sense. Vault Owners can reclaim their deposited assets by repaying the generated DAI plus accrued fees, but this is a mechanical interaction with autonomous code, not an enforceable claim against an entity.[^122] DAI Holders who acquired tokens on secondary markets cannot even use DAI to directly obtain assets from a Maker Vault — they hold tokens that represent no claim against any issuer.[^123]

Under MiCAR, redemption protections are more robust. Holders of e-money tokens have a right of redemption at any moment and at par value, redemption fees are explicitly prohibited, and temporary suspensions require regulatory approval.[^124]


## How Are Stablecoins Regulated Under the GENIUS Act?

The GENIUS Act, enacted on July 18, 2025, is the first comprehensive federal legislation addressing stablecoins in the United States.[^125] The Act establishes a unified category of "payment stablecoins" — digital assets designed to maintain stable value relative to a reference asset and readily redeemable for fiat currency — and creates a permission structure for their issuance and growth.[^126]

Key provisions include: mandatory one-to-one reserve backing with high-quality assets; prohibition on fractional reserve banking and rehypothecation; segregated custody with qualified custodians; statutory redemption obligations; disclosure requirements for redemption procedures and fees; and unprecedented bankruptcy protections including reserve exclusion from the estate, universal holder standing, and super-priority for reserve shortfalls.[^127]

The Act creates parallel regulatory tracks: state-licensed issuers operate under state supervision, while federally licensed issuers may obtain charters from the Office of the Comptroller of the Currency.[^128] Both bank and non-bank entities may issue payment stablecoins, provided they satisfy applicable requirements.

The GENIUS Act definition effectively excludes algorithmic stablecoins that lack reserve backing, as well as decentralized protocols that lack identifiable issuers.[^129] For algorithmic and decentralized stablecoins, the Act mandates future Treasury Department studies rather than imposing substantive regulation.[^130]


## Who Is the "Issuer" of a Decentralized Stablecoin, and Can Decentralized Stablecoins Be Regulated?

This question is addressed comprehensively in Professor Tosato's forthcoming essay in the *Iowa Law Review Online*, co-authored with Christopher K. Odinet.[^131] The essay provides the first comprehensive legal analysis of decentralized stablecoins and reveals a private law vacuum that distinguishes these tokens from every traditional financial instrument.

Decentralized stablecoins have no issuer in any legally meaningful sense. The MakerDAO protocol, which controls DAI, comprises multiple smart contracts on the Ethereum network that execute predetermined operations automatically.[^132] No natural or legal person owns or controls it. The protocol's "white paper" is a technical description, not a contract — and "no terms of service specifically govern the issuance, holding, or use of DAI itself."[^133]

This architecture creates four private law deficiencies. First, a complete contractual void: no bilateral or multilateral agreements exist between any participants, foreclosing breach of contract claims and eliminating baseline commercial protections.[^134] Second, instability regarding property rights: while vault owners retain property rights in deposited assets and DAI follows UCC Article 12 for transfers, the protocol's automated seizure and auction mechanisms operate on uncertain legal foundations.[^135] Third, inadequate tort and criminal law remedies: negligence claims face duty-of-care barriers, conversion claims lack the requisite volitional act, and criminal prosecution of Governors or Maintainers encounters profound mens rea barriers.[^136] Fourth, fiduciary principles cannot coherently apply to the diffuse, pseudonymous, and conflicting relationships that characterize the ecosystem.[^137]

**Can they be regulated?** Both MiCAR and the GENIUS Act explicitly defer substantive regulation of decentralized stablecoins to future study.[^138] In the interim, they employ divergent strategies:

MiCAR adopts functional definitions that technically encompass decentralized stablecoins (DAI functionally qualifies as an e-money token) but imposes structural compliance requirements that these protocols cannot satisfy (authorization, management, segregated reserves). The regulation effectively excludes decentralized stablecoins by transferring liability to crypto-asset service providers who list them — making these intermediaries quasi-issuers for assets they cannot control.[^139]

The GENIUS Act adopts structural prerequisites that categorically exclude protocols lacking identifiable issuers from the "payment stablecoin" definition, leaving them in regulatory limbo. The Act explicitly carves out "distributed ledger protocols," "self-custodial software interfaces," and "liquidity pools" from the definition of "digital asset service provider."[^140]

Neither framework successfully resolves the fundamental challenge: replicating financial functions without financial institutions.[^141]


## What Risks Do Algorithmic Stablecoins Present, and Should They Be Banned?

Algorithmic stablecoins and dual-coin stablecoins present acute risks because they are not backed by reserve assets. Their viability depends entirely on market confidence in the stabilization mechanism itself.[^142]

The collapse of TerraUSD/Luna in May 2022 remains the most devastating illustration. TerraUSD was a dollar-pegged stablecoin whose stabilization mechanism relied on a secondary coin, Luna. When TerraUSD's price fell unexpectedly, a negative feedback loop — a "death spiral" — ensued: declines in one coin fueled declines in the other, and the system collapsed entirely when Luna's price fell below one dollar, breaking the stabilization mechanism. The system's market capitalization, which had exceeded $60 billion, was destroyed almost entirely within days.[^143]

Multiple other dual-coin and algorithmic stablecoin projects (including Iron/Titan and USDX/Lighthouse) have failed catastrophically through similar dynamics.[^144] For holders of these stablecoins, the legal analysis returns a clear and somber outcome: they have neither remedies nor recourse in the event of a collapse.[^145]

The GENIUS Act does not explicitly ban algorithmic stablecoins, but its definition of "payment stablecoin" — requiring an issuer "obligated to convert, redeem, or repurchase for a fixed amount of monetary value" and mandating reserve-backed stabilization — effectively excludes them from the regulated stablecoin market.[^146] The Act mandates a Treasury Department study on "endogenously collateralized payment stablecoins" to inform future policy.[^147]


## How Does the European Union Regulate Stablecoins Under MiCA?

The EU's Markets in Crypto-Assets Regulation (MiCAR), in force since December 30, 2024, creates two categories of stablecoins: asset-referenced tokens (ARTs), which reference assets other than a single official currency, and e-money tokens (EMTs), which reference only a single fiat currency.[^148] This dual classification contrasts with the GENIUS Act's unified "payment stablecoin" category.

MiCAR employs a markedly different regulatory philosophy from the GENIUS Act. Where the American legislation focuses on operational requirements and bankruptcy protections, MiCAR emphasizes comprehensive conduct obligations and strict liability.[^149]

On contractual protections, MiCAR imposes duties to act honestly, fairly, and professionally, and establishes strict liability for any misleading information in white papers — any contractual provision attempting to exclude or limit this liability is "deprived of legal effect."[^150] The GENIUS Act does not impose comparable affirmative duties.

On redemption, MiCAR provides an unconditional statutory right: ART holders have a "right of redemption at all times against the issuers"; EMTs must be redeemable "at any moment and at par value." Both provisions explicitly prohibit redemption fees.[^151] The GENIUS Act creates a statutory redemption obligation but permits issuers to charge disclosed fees and set eligibility criteria.

On reserves, MiCAR requires segregation, authorized custody, and limitation to high-quality assets, but stops short of granting holders direct proprietary rights — creating quasi-proprietary protection through operational segregation.[^152] The GENIUS Act goes further by amending the Bankruptcy Code to exclude reserves from the estate entirely, but the resulting framework is internally contradictory.[^153]

For decentralized stablecoins, MiCAR's functional definitions technically encompass protocols like DAI but impose impossible compliance requirements, effectively excluding them through liability transfer to crypto-asset service providers.[^154]


## What Systemic Risks Do Stablecoins Pose to Financial Stability?

The systemic risks of stablecoins derive primarily from their dependence on the traditional banking system for reserve custody and their vulnerability to confidence crises amplified by the always-on nature of blockchain networks.

Non-bank stablecoin issuers must entrust their reserves to third-party custodians such as commercial banks. This exposes both issuers and holders to the credit and operational risk of custodian failure — a vulnerability that neither can fully monitor or control.[^155] The Silicon Valley Bank episode of March 2023 demonstrated this danger concretely: Circle's $3.3 billion in uninsured cash reserves at the failed bank triggered panic selling that drove USDC to $0.88 over a weekend when traditional payment rails were closed.[^156]

This episode reveals a troubling asymmetry at the heart of the stablecoin model. Stablecoin issuers promise 24/7 availability on always-on blockchain networks, yet they must re-enter the traditional banking system to honor redemption requests — a system that operates on business days and working hours.[^157] Unlike bank runs, which can be halted by closing doors or pausing over weekends, stablecoin issuers remain vulnerable at all times while lacking access to the braking mechanisms (Federal Reserve liquidity facilities, FDIC resolution authority) that protect banks.[^158]

The GENIUS Act does not include protections that would enhance the information insensitivity of stablecoin claims by reducing dependence on third-party custodians. It does not require issuers to hold reserves in Federal Reserve accounts. It explicitly denies federal insurance. And while stablecoin issuers, as customers of banks, may themselves enjoy deposit insurance, that protection belongs to the issuer — not to stablecoin holders.[^159]


## Why Do Stablecoins Matter for the Future of Payments, Commercial Law, and Financial Regulation?

Stablecoins matter because they represent the first serious attempt in generations to create new private money at scale. If current projections hold, stablecoins will fundamentally reshape the architecture of the payment system and alter the landscape of private money in ways not seen since the rise of bank deposits as the dominant medium of exchange.[^160]

The policy stakes extend well beyond the stablecoin market itself. A recurring theme of Professor Tosato's scholarship is the importance of integrating public law with private law analysis. Financial regulation too often proceeds without adequate attention to the private law foundations upon which regulated financial instruments rest — the contractual relationships, property rights, and transfer mechanisms that define the money claim.[^161] The GENIUS Act's bankruptcy provisions fail precisely because Congress attempted to retrofit special protections onto a claim whose fundamental legal nature was not fully considered. A more coherent approach would first determine how stablecoins function, what novel capabilities they possess, and what rights holders actually have, then allow regulatory treatment to flow as a logical consequence.[^162]

The lessons generalize: as financial markets continue to evolve, the instruments they produce will demand regulatory responses that integrate public oversight with the private law architecture governing the claims those instruments represent.[^163]


## What Are the Key Unresolved Legal and Regulatory Questions About Stablecoins?

Despite the significant advances represented by the GENIUS Act and MiCAR, several fundamental questions remain unresolved:

**Is the redemption right embedded in the token?** The GENIUS Act does not specify whether the issuer's obligation to redeem runs to the owner of the stablecoin, to the person in control of it, or whether the right is tokenized such that it travels with the digital asset itself. This ambiguity undermines negotiability and creates uncertainty in every stablecoin transaction.[^164]

**When does a stablecoin transfer achieve finality?** Neither the GENIUS Act nor any other source of law establishes when a peer-to-peer stablecoin transfer extinguishes the payor's debt, or what rules govern intermediated transfers. This gap is incompatible with money's basic function.[^165]

**How should issuer insolvency be handled?** The GENIUS Act's bankruptcy provisions are internally contradictory and operationally incoherent. The authors propose replacing them with a perfected security interest in reserve assets under UCC Article 9, or alternatively, providing qualifying issuers with Federal Reserve master account access to eliminate custodian dependency entirely.[^166]

**Should stablecoin holders have insurance?** Neither the GENIUS Act nor MiCAR provides insurance for stablecoin holders. The *Moneyness* article proposes an industry-funded insurance mechanism modeled on the Securities Investor Protection Corporation (SIPC), which would mutualize failure risk and enhance the information insensitivity of stablecoin claims.[^167]

**How should decentralized stablecoins be regulated?** Both MiCAR and the GENIUS Act defer this question to future study. The longer studies extend, the more entrenched decentralized stablecoins become, potentially constraining future regulatory options through path dependence.[^168]

**Should functional equivalence drive regulatory parity?** Decentralized stablecoins perform identical economic functions to their centralized counterparts — maintaining dollar pegs, facilitating payments, serving as trading collateral — yet receive fundamentally different legal treatment. Whether the law should address what stablecoins functionally do or how they are structurally organized remains an open question.[^169]

---

## Notes

[^1]: Bruce, Odinet & Tosato, *The Private Law of Stablecoins*, 54 Ariz. St. L.J. 1073, 1078 (2022).
[^2]: *Id.* at 1089-90.
[^3]: Odinet, Tosato & Yadav, *The Moneyness of Stablecoins*, Yale L.J. (forthcoming), manuscript at 4; Stablecoins 2030: Web3 to Wall Street, Citigroup (Sept. 25, 2025).
[^4]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1105-07.
[^5]: MiCAR, Regulation (EU) 2023/1114 (in force Dec. 30, 2024); GENIUS Act, 12 U.S.C. §§ 5901-5916 (enacted July 18, 2025).
[^6]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1090-91 (adopting the classification suggested by Moin, Sirer & Sekniqi).
[^7]: *Id.* at 1091.
[^8]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 30-31.
[^9]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1092.
[^10]: *Id.* at 1092.
[^11]: *Id.* at 1092; Odinet & Tosato, *Regulating Decentralized Stablecoins: Comparing MiCAR and the GENIUS Act*, Iowa L. Rev. Online (forthcoming 2026), manuscript at 7-10.
[^12]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1093.
[^13]: *Id.* at 1093-94.
[^14]: *Id.* at 1094.
[^15]: *Id.* at 1094-95.
[^16]: *Id.* at 1096-97; *id.* at 1118-19 (TerraUSD/Luna collapse).
[^17]: *Id.* at 1098.
[^18]: *Id.* at 1094-95.
[^19]: *Id.*
[^20]: *Id.* at 1095.
[^21]: *Id.*
[^22]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 8-9.
[^23]: *Id.* at 9.
[^24]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 34.
[^25]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1099.
[^26]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3.
[^27]: *Id.* at 9.
[^28]: *Id.* at 5.
[^29]: *Id.* at 10.
[^30]: *Id.* at 10-11.
[^31]: *Id.* at 12-19.
[^32]: *Id.* at 19-22.
[^33]: *Id.* at 22-23.
[^34]: *Id.* at 26.
[^35]: GENIUS Act § 4(e)(2)(A); Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 49.
[^36]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 65.
[^37]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 11-23.
[^38]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 11.
[^39]: *Id.* at 14-16.
[^40]: *Id.* at 16.
[^41]: GENIUS Act § 4(e)(2)(A).
[^42]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 54.
[^43]: *Id.* at 56-59.
[^44]: *Id.* at 55.
[^45]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 11-13.
[^46]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 10-11.
[^47]: *Id.* at 11.
[^48]: *Id.* at 21.
[^49]: MiCAR arts. 49(4), 49(6); Odinet & Tosato, *Regulating Centralized Stablecoins: Comparing MiCAR and the GENIUS Act*, Notre Dame L. Rev. Reflection (forthcoming 2026), manuscript at 16.
[^50]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 36, 49.
[^51]: Odinet & Tosato, *Regulating Centralized Stablecoins*, *supra* note 49, at 14-16.
[^52]: GENIUS Act § 2(22)(A).
[^53]: Tosato & Odinet, *Digital Assets and the Property Question*, Fla. L. Rev. (forthcoming 2026); U.C.C. § 12-102(a)(1).
[^54]: U.C.C. § 12-102(a)(2), § 12-104(e).
[^55]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 64.
[^56]: *Id.*
[^57]: *Id.*
[^58]: GENIUS Act § 2(22)(A)(ii)(I).
[^59]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 50-51.
[^60]: *Id.* at 51-52.
[^61]: *Id.* at 52, 71.
[^62]: *Id.* at 35-36.
[^63]: *Id.* at 36.
[^64]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 11-13.
[^65]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1125 (Figure 3: Reserve Asset Holding Spectrum).
[^66]: *Id.* at 1132.
[^67]: *Id.* at 1133-35.
[^68]: GENIUS Act § 11(e)(3).
[^69]: GENIUS Act § 11(a)(2).
[^70]: GENIUS Act §§ 11(a)(1), 11(d).
[^71]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 44.
[^72]: *Id.* at 57.
[^73]: *Id.* at 58.
[^74]: *Id.* at 69-70.
[^75]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 13-16.
[^76]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 60-61.
[^77]: *Id.* at 60.
[^78]: *Id.* at 60-61.
[^79]: *Id.* at 62.
[^80]: *Id.* at 70.
[^81]: *Id.* at 62-63.
[^82]: *Id.* at 60.
[^83]: Tosato, Dick & Odinet, *Debt Tokens*, 173 U. Pa. L. Rev. 1103, 1152 (2025).
[^84]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 64; U.C.C. § 12-104(f).
[^85]: U.C.C. § 12-104(e).
[^86]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 64.
[^87]: *Id.* at 71.
[^88]: Tosato & Odinet, *Digital Assets and the Property Question*, *supra* note 53, at 48-50.
[^89]: *Id.* at 50.
[^90]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1151-55.
[^91]: *Id.* at 1154.
[^92]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 61-62.
[^93]: *Id.* at 62.
[^94]: *Id.* at 44; U.C.C. §§ 8-501 to 8-511.
[^95]: Odinet & Tosato, *Regulating Centralized Stablecoins*, *supra* note 49, at 11.
[^96]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1136-37.
[^97]: *Id.* at 1126-32.
[^98]: *Id.* at 1137.
[^99]: GENIUS Act § 11(e)(3).
[^100]: GENIUS Act § 11(a)(2).
[^101]: GENIUS Act §§ 11(a)(1), 11(d).
[^102]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 56-59.
[^103]: *Id.* at 57.
[^104]: *Id.*
[^105]: *Id.* at 58.
[^106]: *Id.* at 59.
[^107]: *Id.* at 69-70.
[^108]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 10.
[^109]: GENIUS Act § 4(a)(1)(A).
[^110]: *Id.*
[^111]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 32.
[^112]: GENIUS Act § 10(c).
[^113]: GENIUS Act § 4(a)(2).
[^114]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 53.
[^115]: *Id.*
[^116]: *Id.* at 66.
[^117]: *Id.* at 42.
[^118]: GENIUS Act § 2(22)(A)(ii)(I).
[^119]: GENIUS Act § 4(a)(1)(B)(i).
[^120]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 43.
[^121]: *Id.*
[^122]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 9.
[^123]: *Id.* at 12.
[^124]: MiCAR arts. 39(1), 49(4), 39(3), 49(6); Odinet & Tosato, *Regulating Centralized Stablecoins*, *supra* note 49, at 16.
[^125]: GENIUS Act, 12 U.S.C. §§ 5901-5916.
[^126]: GENIUS Act § 2(22)(A).
[^127]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 42-46; Odinet & Tosato, *Regulating Centralized Stablecoins*, *supra* note 49, at 14-19.
[^128]: GENIUS Act §§ 3, 5-6.
[^129]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 47.
[^130]: GENIUS Act §§ 9(e)(1)(E), 14.
[^131]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11.
[^132]: *Id.* at 8.
[^133]: *Id.* at 11.
[^134]: *Id.* at 11-13.
[^135]: *Id.* at 13-16.
[^136]: *Id.* at 16-19.
[^137]: *Id.* at 19-23.
[^138]: *Id.* at 34-35.
[^139]: *Id.* at 31-32.
[^140]: GENIUS Act § 2(7)(B); Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 32.
[^141]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 34.
[^142]: Bruce, Odinet & Tosato, *Private Law of Stablecoins*, *supra* note 1, at 1097-98.
[^143]: *Id.* at 1118-19.
[^144]: *Id.* at 1118.
[^145]: *Id.* at 1119.
[^146]: GENIUS Act § 2(22)(A); Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 47.
[^147]: GENIUS Act § 14.
[^148]: MiCAR arts. 3(1)(6), 3(1)(7).
[^149]: Odinet & Tosato, *Regulating Centralized Stablecoins*, *supra* note 49, at 14-15.
[^150]: MiCAR arts. 26(1)-(2), 27(1), 52(1)-(2), 53(1).
[^151]: MiCAR arts. 39(1), 39(3), 49(4), 49(6).
[^152]: MiCAR arts. 36(2)-(3), 37(3), 38(1).
[^153]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 56-59.
[^154]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 31-32.
[^155]: Odinet, Tosato & Yadav, *Moneyness*, *supra* note 3, at 53.
[^156]: *Id.* at 54.
[^157]: *Id.* at 53-54.
[^158]: *Id.* at 54-55.
[^159]: *Id.* at 55-56.
[^160]: *Id.* at 4.
[^161]: *Id.* at 72.
[^162]: *Id.* at 59.
[^163]: *Id.* at 72.
[^164]: *Id.* at 50-52, 71.
[^165]: *Id.* at 60-63, 70.
[^166]: *Id.* at 65-70.
[^167]: *Id.* at 68-69.
[^168]: Odinet & Tosato, *Regulating Decentralized Stablecoins*, *supra* note 11, at 35.
[^169]: *Id.* at 33-34.
