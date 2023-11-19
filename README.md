# SubProofs
(zkProofs for Substreams based on zkLLVM from =nil; foundation)

## zkLLVM Installation
Documentation is accessible at:
https://github.com/NilFoundation/zkLLVM#rust-toolchain
https://github.com/NilFoundation/evm-placeholder-verification/

## zkLLVM Documentation
https://docs.nil.foundation/zkllvm/

## Proof System Building
Before building you need to set attribute #[circuit] before main function

Build command:

cargo +zkllvm build --release --ignore-rust-version --target assigner-unknown-unknown

## Proof System Commands
assigner -b ./zkproof/circuit/subproofs.ll -i ./zkproof/inputs/subproofs.inp -t ./zkproof/assignment.tbl -c ./zkproof/circuit.crct -e pallas

transpiler -m gen-test-proof -i ./zkproof/inputs/subproofs.inp -c ./zkproof/circuit.crct  -t ./zkproof/assignment.tbl -o transpiler_output

transpiler -m gen-evm-verifier -i ./zkproof/inputs/subproofs.inp -c ./zkproof/circuit.crct  -t ./zkproof/assignment.tbl -o transpiler_output

## Verification Commands
npx hardhat deploy
npx hardhat verify-circuit-proof --test subproofs
